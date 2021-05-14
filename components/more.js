import styles from './more.module.css'
import Link from 'next/link'

export default function More(){
    return(
    <div className={styles.more}>
        <ul className={styles.ul}>设置
        <div className={styles.hide}>
        <li>搜索设置</li>
        <li>高级搜索</li>
        <li>关闭预测</li>
        <li>隐私设置</li>
        <li>隐藏资讯</li>
        <li>更换皮肤</li>
        </div>
         </ul>
        <Link href="/"><a className={styles.button}>登录</a></Link>
    </div>
    )
}
