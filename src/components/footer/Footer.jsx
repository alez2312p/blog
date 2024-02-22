import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import SocialNetwork from "../socialNetwork/SocialNetwork";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Logo"
            loading="lazy"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>Blog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
          minima vitae architecto possimus inventore quidem accusantium
          voluptates fugit necessitatibus explicabo, repellat fuga reiciendis
          sit, soluta deserunt quam eos libero.
        </p>
        <SocialNetwork />
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?category=style">Style</Link>
          <Link href="/blog?category=fashion">Fashion</Link>
          <Link href="/blog?category=travel">Travel</Link>
          <Link href="/blog?category=coding">Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/"
          >
            Facebook
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/"
          >
            Instagram
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.tiktok.com/"
          >
            TikTok
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/"
          >
            Youtube
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
