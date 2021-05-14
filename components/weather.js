import styles from './weather.module.css'

export default function Weather(){
    return(
    <div className={styles.container}>
        <a>上海 
        <img className={styles.img} src="static/img/a1.png"  alt='天气'/ > 
        25℃ 良</a>
        <div className={styles.wea_container}>
         05月08日  <a className={styles.gray}>农历三月十七</a>  <a className={styles.blue}>未来七天天气</a> 
         <div className={styles.future}>
             <div>
                 今天（周日）
                 <img src="static/img/a1.png" alt="天气" />
                 <br/>
                 30℃
                 <br/>
                 多云
                 <br/>
                 东南风4-5级
              </div>
              <div>
                 今天（周日）
                 <img src="static/img/a1.png" alt="天气" />
                 <br/>
                 30℃
                 <br/>
                 多云
                 <br/>
                 东南风4-5级
              </div>
              <div>
                 今天（周日）
                 <img src="static/img/a1.png" alt="天气" />
                 <br/>
                 30℃
                 <br/>
                 多云
                 <br/>
                 东南风4-5级
              </div>
              <div>
                 今天（周日）
                 <img src="static/img/a1.png" alt="天气" />
                 <br/>
                 30℃
                 <br/>
                 多云
                 <br/>
                 东南风4-5级
              </div>
              <div>
                 今天（周日）
                 <img src="static/img/a1.png" alt="天气" />
                 <br/>
                 30℃
                 <br/>
                 多云
                 <br/>
                 东南风4-5级
              </div>
         </div>
        </div>
    </div>
    )
}