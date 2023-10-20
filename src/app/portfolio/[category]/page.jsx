"use client"
import React from 'react'
import styles from "./page.module.css"
import Button from '@/Components/button/Button'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData =  (cat) => {
  const data =  items[cat]
  if(data){
    return data
  }else{
    return notFound()
  }
}

 function Category({params}) {
  const data =  getData(params.category)
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((i)=>{
        return(
        <div className={styles.item} key={i.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{i.title}</h1>
          <p className={styles.desc}>{i.desc}</p>
          <div className='button-cat'>
          <Button text="See More" url="#"/>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={i.image} alt='' width={500} height={400}/>
        </div>
      </div>
        )
      })}
    </div>
    </>
  )
}

export default Category
