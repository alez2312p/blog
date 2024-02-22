import styles from "./socialNetwork.module.css";
import Image from "next/image";
import Link from "next/link";

const SocialNetwork = () => {
  return (
    <div className={styles.social}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/"
      >
        <Image
          src="/facebook.png"
          alt="facebook"
          loading="lazy"
          width={24}
          height={24}
        />
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/"
      >
        <Image
          src="/instagram.png"
          alt="instagram"
          loading="lazy"
          width={24}
          height={24}
        />
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.tiktok.com/"
      >
        <Image
          src="/tiktok.png"
          alt="tiktok"
          loading="lazy"
          width={24}
          height={24}
        />
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com/"
      >
        <Image
          src="/youtube.png"
          alt="youtube"
          loading="lazy"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};

export default SocialNetwork;
