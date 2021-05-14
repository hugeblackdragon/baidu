import styles from './fixheader.module.css'
import More from './more'
import Search from './search'

export default function Fixheader(){
    return(
        <div className={styles.header}>
            <img className={styles.img}
            src='static/img/2.png' 
            alt='百度标志'/>
            <div className={styles.search}>
            <Search></Search>
            </div>
            <div className={styles.more}>
            <More></More>
            </div>
        </div>
    )
}