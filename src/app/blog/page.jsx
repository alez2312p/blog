import CardList from "../../components/cardList/CardList";
import Menu from "../../components/menu/Menu";
import styles from "./blogPage.module.css";
const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
