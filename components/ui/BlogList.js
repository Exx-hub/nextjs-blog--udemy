import BlogCard from "./BlogCard";
import styles from "../../styles/BlogList.module.css";

function BlogList({ posts }) {
  return (
    <ul className={styles.list}>
      {posts.map((item) => (
        <BlogCard key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default BlogList;
