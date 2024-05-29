import Link from "next/link";
import styles from "./menuCategories.module.css";

const getData = async () => {
  const res = await fetch(
    `https://blog-omega-brown.vercel.app/api/categories`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
};

const MenuCategories = async () => {
  const data = await getData();
  return (
    <div className={styles.categoryList}>
      {data?.map((category) => (
        <Link
          href={`/blog?category=${category.slug}`}
          key={category._id}
          className={`${styles.categoryItem} ${styles[category.title]}`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategories;
