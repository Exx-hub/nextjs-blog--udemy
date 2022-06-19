import Image from "next/image";
import styles from "../../styles/PostHeader.module.css";

function PostHeader({ title, imagePath }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <div>
        <Image alt="slug" src={imagePath} width={200} height={120} />
      </div>
    </header>
  );
}

export default PostHeader;
