"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
function Dashbord() {
  const [datas, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isloding, setIsLoding] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoding(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     } else {
  //       const data = await res.json();
  //       setData(data);
  //       setIsLoding(false);
  //     }
  //   };
  //   getData();
  // }, []);

//   const fetcher = (...args) => fetch(...args).then((res) => res.json())

//   const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)

// console.log(data,"datas")

//   return <div className={styles.container}></div>;
}

export default Dashbord;
