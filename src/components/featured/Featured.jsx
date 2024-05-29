import Image from "next/image";
import Link from "next/link";
import styles from "./featured.module.css";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/lastPost`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

// https://chatgpt.com/c/1051b800-0749-4c1d-b49e-f986dd297663
// https://chatgpt.com/c/ed0e4856-50a2-4946-ba25-7b2c46450cf7
const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/gm, "");

const Featured = async () => {
  const data = await getData();
  const post = data[0];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Last Post</h1>
      <div className={styles.post}>
        {post.image && (
          <div className={styles.imgContainer}>
            <Image
              src={post?.image}
              alt=""
              loading="lazy"
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{post?.title}</h1>
          <p className={styles.postDescription}>{slugify(post?.description)}</p>
          <Link href={`posts/${post.slug}`} className={styles.button}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
