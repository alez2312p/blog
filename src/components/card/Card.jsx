import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/gm, "");

const Card = ({ key, post }) => {
  return (
    <div className={styles.container} key={key}>
      {post.image && (
        <div className={styles.imageContainer}>
          <Image
            src={post.image}
            alt=""
            loading="lazy"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.description}>
          {slugify(post.description.substring(0, 60))}
        </p>
        <Link href={`posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
