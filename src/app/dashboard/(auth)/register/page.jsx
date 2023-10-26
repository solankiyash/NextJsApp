"use client";
import React, { useState } from "react";
import Styles from "./page.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/register", data);
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      console.log(error);
    }
  };

  const handelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="User Name"
          className={Styles.input}
          name="name"
          value={data.name}
          onChange={handelChange}
          required
        />
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
        <button className={Styles.button}>Register</button>
      </form>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
}

export default Register;
