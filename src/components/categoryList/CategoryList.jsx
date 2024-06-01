import Link from "next/link";
import Image from "next/image";
import styles from "./categoryList.module.css";

const getData = async () => {
  const res = await fetch(
    `https://blog-alez.vercel.app/api/categories/mostPopular`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((category) => (
          <Link
            href={`/blog?category=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
            key={category._id}
          >
            {category.image && (
              <Image
                src={category.image}
                alt=""
                loading="lazy"
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
