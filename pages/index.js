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

  const [num,setNum] = useState(4);

  function scb(){
    let st = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    let ch = document.documentElement.clientHeight
    let sh = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
    console.log(st);
    console.log(ch);
    console.log(sh);
    if(st + ch +2>sh) {
        setNum(num+4);
        console.log(num);
           //这里进行修改成请求数据
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
    <div className={styles.container}>
      <Fixheader></Fixheader>
      <div className={styles.tou}>
        <Detail></Detail>
        <div className={styles.show}>
        <img src='static/img/1.gif' />
        <Search></Search>
        </div>
      </div>
      
    <div className={styles.content}>
    <div className={styles.left}>
      <ul className={styles.ul}>
        <li className={styles.li}>我的关注</li>
        <li className={styles.li}>推荐</li>
        <li className={styles.li}>导航</li>
      </ul>
      <ul>
      {allPostsData.slice(0,num).map(({ id,date, title,author,o_img }) => (
            <New id={id} img={o_img} title={title} author={author} time={date}
            ></New>
          ))}
      </ul>
    </div>
    <div className={styles.right}>
      百度热榜 
      <div className={styles.change}>换一换</div>
      <ul>
      {state.list.map((i) => {
          return (
            <li className={styles.li_2}>
              <a className={styles.a}>
              {i.title}
              </a>
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