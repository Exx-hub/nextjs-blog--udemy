import BlogList from "./BlogList";
import styles from "../../styles/Allposts.module.css";

function AllPosts(props) {
  return (
    <section className={styles.allposts}>
      <h1>All Posts</h1>
      <BlogList posts={props.posts} />
    </section>
  );
}

export default AllPosts;
