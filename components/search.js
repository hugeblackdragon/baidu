import styles from './search.module.css'

export default function Search(){
    return(
    <div className={styles.container}>
        <input className={styles.search} type='text'/>
            <button className={styles.button}>
               百度一下
            </button>
    </div>
    )
}