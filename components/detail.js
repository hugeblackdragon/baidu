import styles from "./detail.module.css"
import More from "./more"
import Weather from './weather'
import Link from "next/link"

export default function Detail(){
    return(
        <div className={styles.container}>
            <a className={styles.li}>新闻</a>
            <a className={styles.li}>hao123</a>
            <a className={styles.li}>地图</a>
            <a className={styles.li}>直播</a>
            <a className={styles.li}>视频</a>
            <a className={styles.li}>贴吧</a>
            <a className={styles.li}>学术</a>
            <a className={styles.li}>更多</a>
        <div className={styles.right}>
            <div className={styles.wea}>
                <Weather></Weather>
            </div>
            <div className={styles.more}>
            <More></More>
            </div>
        </div>
        </div>
    )
}