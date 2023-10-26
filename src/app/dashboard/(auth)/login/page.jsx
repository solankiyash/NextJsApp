"use client";
import User from "@/models/User";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Styles from "./page.module.css";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter()
  const session = useSession()
  
  // if(session.status === "loading"){
  //   return <p>Loading....</p>
  // }
  if(session.status === "loading"){
    <p>Loding....</p>
  } 
  if(session.status ==="authenticated"){
    router?.push("/dashboard")
  }

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", data );
  };
  
  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handelSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={Styles.input}
          required
          name="email"
          value={data.email}
          onChange={handelChange}
        />
        <input
          type="password"
          placeholder="Password"
          className={Styles.input}
          name="password"
          value={data.password}
          onChange={handelChange}
          required
        />
        <button className={Styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>singin</button>
    </div>
  );
}

export default Login;
