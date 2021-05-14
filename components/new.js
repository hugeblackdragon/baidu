import styles from './new.module.css'
import Link from 'next/link'

export default function New(props){
    return(
        <li className={styles.new}>
        <img src={props.img} alt='新闻配图' className={styles.img}/>
        <div className={styles.container}>
        <Link href={`/${props.id}`}>
        <a className={styles.title}>{props.title}</a>
        </Link>
        <div className={styles.font}>
        {props.author} {props.time}
        </div>
        </div>
        </li>
    )
}