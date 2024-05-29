"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./writePage.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "../../utils/firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Import ReactQuill dynamically
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

const storage = getStorage(app);

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("fashion");
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };
    file && upload();
  }, [file]);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setOpen(false);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const hundlerSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: value,
        image: media,
        slug: slugify(title),
        catSlug: category,
      }),
    });
    if (res.ok) {
      router.push("/blog");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.editor}>
        <div className={styles.addImageAndCategory}>
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image
              src="/plus.png"
              alt=""
              loading="lazy"
              width={16}
              height={16}
            />
          </button>
          <select
            className={styles.select}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="fashion">Fashion</option>
            <option value="culture">Culture</option>
            <option value="coding">Coding</option>
            <option value="food">Food</option>
            <option value="style">Style</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image
                  src="/image.png"
                  alt=""
                  loading="lazy"
                  width={16}
                  height={16}
                />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image
                src="/external.png"
                alt=""
                loading="lazy"
                width={16}
                height={16}
              />
            </button>
            <button className={styles.addButton}>
              <Image
                src="/video.png"
                alt=""
                loading="lazy"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}
        {preview && (
          <div className={styles.preview}>
            <Image
              src={preview}
              alt="preview"
              loading="lazy"
              width={500}
              height={250}
              className={styles.imagePreview}
            />
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={hundlerSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
