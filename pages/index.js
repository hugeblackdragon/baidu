import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Detail from '../components/detail.js'
import Search from '../components/search'
import New from '../components/new'
import Fixheader from '../components/fixheader.js'
import { getSortedPostsData } from '../lib/posts'

import React, { useEffect, useState } from "react";

export default function Home({ allPostsData }) {
  const [state, setState] = useState({
    list: [],
  });
  const [showResults, setShowResults] = React.useState(0)
    const onClick0 = () => setShowResults(0)
    const onClick1 = () => setShowResults(1)
    const onClick2 = () => setShowResults(2)
  const [num,setNum] = useState(4);
  //滚动判断函数
  function scb(){
    let st = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    let ch = document.documentElement.clientHeight
    let sh = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
    console.log(st);
    console.log(ch);
    console.log(sh);
    if(st + ch +2>sh &&showResults==0) {
        setNum(num+4);
        console.log(num);
        }
    }

  useEffect(
    () => {
      window.addEventListener("scroll",scb);
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
    return () =>{ 
      window.removeEventListener("scroll",scb);
      };
  }
  );

  return (
    <html lang="zh">
      <Head>
        <title>百度一下，你就知道</title>
        <meta name="keywords" content="HTML,CSS,Baidu" />
        <meta name="description" content="A copy of baidu" />
      </Head> 
    <div className={styles.container}>
      <Fixheader></Fixheader>
      <div className={styles.tou}>
        <Detail></Detail>
        <div className={styles.show}>
        <img src='static/img/1.gif' alt='百度标志' />
        <Search></Search>
        </div>
      </div>
    <div className={styles.content}>
    <div className={styles.left}>
      <ul className={styles.ul}>
        <li onClick={onClick1} className={styles.li} style={showResults == 1 ? {color: 'black' } : { }}>我的关注</li>
        <li onClick={onClick0} className={styles.li} style={showResults == 0 ? {color: 'black' } : { }}>推荐</li>
        <li onClick={onClick2} className={styles.li} style={showResults == 2 ? {color: 'black' } : { }}>导航</li>
      </ul>
      <ul style={showResults == 0 ? {  } : { display: 'none' }}>
      {allPostsData.slice(0,num).map(({ id,date, title,author,o_img }) => (
            <New id={id} img={o_img} title={title} author={author} time={date}
            ></New>
          ))}
      </ul>
      <div className={styles.left2} style={showResults == 1 ? {  } : { display: 'none' }}>
        <div className={styles.inner}>
         我的导航
        <div>
          <span className={styles.plus}>+</span>添加导航
        </div>
        </div>
        <div className={styles.out}>
        <span className={styles.plus2}>+</span>自定义
        </div>
      </div>
      <div className={styles.left3}  style={showResults == 2 ? {  } : { display: 'none' }}>
        <div>
        <img src="static/img/6.png" className={styles.img} alt="外部网站" />
         hao123
         </div>
      </div>
    </div>
    <div className={styles.right} style={showResults == 0 ? {  } : { display: 'none' }}>
      百度热榜 
      <div className={styles.change}>换一换</div>
      <ul>
      {state.list.map((i) => {
          return (
            <li className={styles.li_2}>
              <Link href="/">
              <a className={styles.a}>
              {i.title}
              </a>
              </Link>
              <div className={styles.amount}>
              {i.amount}
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
    </div>
    </html>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}