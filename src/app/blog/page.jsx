"use client"
import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

  function Blog () {
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get("http://localhost:3000/api/posts")
      .then((res)=> setData(res.data)).catch((err)=> console.log(err))
    },[])
  console.log(data,"data")
  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
      <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div className={styles.imgContainer}>
          <Image
            src={item.img}
            alt={item.title}
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      ))}
    </div>
  );
}

export default Blog;
