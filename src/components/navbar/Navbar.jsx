import styles from "./navbar.module.css";
import Link from "next/link";
import SocialNetwork from "../socialNetwork/SocialNetwork";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <SocialNetwork />
      <div className={styles.logo}>Blog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
