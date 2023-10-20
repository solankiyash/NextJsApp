"use client"
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "../navbar/navbar.module.css"
import DayNightToggle from "react-day-and-night-toggle"
import { ThemeContext } from "@/app/Context/ThemeContext";



const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
 
  const {toggle,mode,isDarkMode} = useContext(ThemeContext)
  
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Solanki
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
          
        ))}

        <DayNightToggle
          onChange={toggle}
          checked={isDarkMode}
        />

        
          <button className={styles.logout}>
            Logout
          </button>
      </div>
    </div>
  );
}

export default Navbar;
