'use client'
import React from 'react'
import styles from '../styles/mesages.module.css'

const data =[
  "Cloudy skies with a chance of rain later. Don't forget your umbrella!",
  "High winds expected in your area. Secure loose items and stay indoors.",
  "Just wanted to say you're doing an awesome job! Keep up the great work"
]

const Mesages = () => {
  

  return (
    <>
    <div className={styles.toggle}>X</div>
   
    <div className={styles.container}>
        <div className={styles.stepContainer}>
            <span className={styles.active}>1</span>
            <span className={styles.steps}>2</span>
            <span className={styles.steps}>3</span>
        </div>
        <div className={styles.message}>
           Step: 1 Messages would be displayed here
        </div>
        <div className={styles.btnContainer}>
            <button className={styles.btn}>Previous</button>
            <button className={styles.btn}>Next</button>
        </div>
    </div>

    </>
  )
}

export default Mesages
