import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/Layout'
import styles from "../posts/id.module.css"

export default function Post({ postData }) {
    return (
    <div>
        <Layout></Layout>
      <div className={styles.front}>
            <div className={styles.haha}>
                <h1>
                {postData.title}
                </h1>
                <div>
                    <img src={postData.img} className={styles.img} />
                    <div   className={styles.plus}>
                    <a>
                    {postData.author}
                    </a>
                    <br />
                    <div className={styles.time}>
                    {postData.time}
                    </div>
                    <br />
                    </div>
                </div>
            </div>
      </div>
      <div className={styles.content}>
        <img src={postData.inner_img} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }