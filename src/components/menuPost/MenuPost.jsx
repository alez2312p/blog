import Link from "next/link";
import Image from "next/image";
import styles from "./menuPost.module.css";

const getData = async () => {
  const res = await fetch(`https://blog-alez.vercel.app/api/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const data = await getData();
  return (
    <div className={styles.items}>
      {data?.map((user) => (
        <Link
          href={`/blog?category=${user.slug}`}
          key={user._id}
          className={styles.item}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={user.image}
                alt=""
                loading="lazy"
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.postTitle}`}>{user.name}</span>
            <h3 className={styles.detail}>{user?.email}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
