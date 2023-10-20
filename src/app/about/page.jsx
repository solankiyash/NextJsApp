import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/Components/button/Button";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            minima nobis. Sequi soluta odio possimus quis voluptates. Iure,
            dolor sequi maxime tempore nobis, nisi hic sint illum ex, odit est?
            <br /> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Amet officiis neque itaque aspernatur vitae tempore ullam,
            assumenda natus laudantium asperiores debitis placeat. Fugit
            blanditiis et fuga assumenda, sequi quam. In?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            corporis laudantium consequatur dolore vel itaque, nobis eaque
            repellat more responsible consequuntur atque deserunt sit inventore, laborum, nisi
            vero! Praesentium quisquam at quae.<br/>
            <br/> - Dynamic Website<br/>
            <br/> - Fast and Handy<br/>
            <br/>  -Mobile Apps<br/>
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
}

export default About;
