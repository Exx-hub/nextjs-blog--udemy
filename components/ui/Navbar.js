import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>ALVIN NEXT BLOG</a>
      </Link>
      <nav>
        <ul className={styles.list}>
          <Link href="/blog-posts">
            <li>
              <a>Posts</a>
            </li>
          </Link>
          <Link href="/contact">
            <li>
              <a>Contact</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
