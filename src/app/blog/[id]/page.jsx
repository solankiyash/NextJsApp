"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.modul.css";
import Image from "next/image";
import img from "../../../../public/pixel3.jpg";
import img1 from "../../../../public/pixel4.jpg";
import { notFound } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { items } from "@/app/portfolio/[category]/data";

function Blogpost({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${params.id}`)
      .then((res) => {
        setData(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      {data.map((item) => (
        <div key={item.id}>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <div className={styles.author}>
                <Image
                  src={item.img}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>YASH SOLANKI</span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
                alt=""
                width={600}
                height={500}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>{data.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogpost;
