import Link from "next/link";
import styles from "./menuPopular.module.css";

const getData = async () => {
  const res = await fetch(
    `https://blog-alez.vercel.app/api/posts/mostPopular`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
};

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/gm, "");

const MostPopular = async () => {
  const data = await getData();
  return (
    <div className={styles.items}>
      {data.map((post) => (
        <Link
          key={post._id}
          className={styles.item}
          href={`/posts/${post.slug}`}
        >
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[post.catSlug]}`}>
              {post.catSlug}
            </span>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <h3 className={styles.detail}>{slugify(post.description)}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MostPopular;
