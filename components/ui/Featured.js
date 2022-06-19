import styles from "../../styles/Featured.module.css";
import BlogList from "./BlogList";

function Featured(props) {
  return (
    <section className={styles.featured}>
      <h1>Featured Posts</h1>
      <BlogList posts={props.featured} />
    </section>
  );
}

export default Featured;
