import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/BlogCard.module.css";

function BlogCard({ item }) {
  const { title, date, text, slug, image } = item;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.cardContainer}>
      <Link href={`/blog-posts/${slug}`}>
        <a>
          <Image
            alt={`photo of ${title}`}
            src={imagePath}
            width={300}
            height={210}
            layout="responsive"
          />
          <div className={styles.textDiv}>
            <h3>{title}</h3>
            <time className={styles.time}>{formattedDate}</time>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default BlogCard;
