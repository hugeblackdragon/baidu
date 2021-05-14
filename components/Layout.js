import styles from './Layout.module.css'
import Link from 'next/link'

export default function Layout(){
   return(
       <div className={styles.fix}>
           <Link href="/">
            <a>
           <img src='static/img/2.png'
           className={styles.img} />
           </a>
            </Link>
            <div className={styles.right}>
            <Link href="/">
              <a className={styles.a}>
                百度首页
              </a>
            </Link>
            <a>
            登录
            </a>
            </div>
        </div>
   )

}