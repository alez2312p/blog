import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <h1 className={styles.logoText}>Alez_Blog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
          minima vitae architecto possimus inventore quidem accusantium
          voluptates fugit necessitatibus explicabo, repellat fuga reiciendis
          sit, soluta deserunt quam eos libero.
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt="facebook"
            loading="lazy"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram"
            loading="lazy"
            width={18}
            height={18}
          />
          <Image
            src="/tiktok.png"
            alt="tiktok"
            loading="lazy"
            width={18}
            height={18}
          />
          <Image
            src="/youtube.png"
            alt="youtube"
            loading="lazy"
            width={18}
            height={18}
          />
        </div>
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
          <Link href="/">Facebbok</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
