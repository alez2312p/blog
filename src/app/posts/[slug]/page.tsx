import Menu from "../../../components/menu/Menu";
import Comments from "../../../components/comments/Comments"
import styles from "./singlePage.module.css"
import Image from "next/image"

const getData = async (slug) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    return res.json();
};

const SinglePage = async ({ params }) => {
    const { slug } = params;

    const data = await getData(slug)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image src={data.user.image} alt="" fill loading="lazy" className={styles.avatar} />
                            </div>
                        )}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user?.name}</span>
                            <span className={styles.date}>
                                {data?.createdAt?.substring(0, 10)}
                            </span>
                        </div>
                    </div>
                </div>
                {data?.image && (<div className={styles.imageContainer}>
                    <Image src={data.image} alt="" fill loading="lazy" className={styles.image} />
                </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}
                        dangerouslySetInnerHTML={{ __html: data?.description }} />
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}
export default SinglePage;