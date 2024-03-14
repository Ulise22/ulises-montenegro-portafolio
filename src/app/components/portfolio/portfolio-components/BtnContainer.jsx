'use client'
import { useState } from 'react'
import styles from './projectPopup.module.css'
import Image from 'next/image'
import leftArrow from '@/assets/icons/bx-chevron-left.svg'
import rightArrow from '@/assets/icons/bx-chevron-right.svg'
import x from '@/assets/icons/bx-x.svg'

export default function BtnContainer ({img1, img2, img3, img4, title, subtitle, text, github, webUrl }) {
    const [isOpen, setIsOpen] = useState(false)
    const [actualImage, setActualImage] = useState(0)
    const groupOfImages = [img1, img2, img3, img4]
    const changeValue = () => {
        setIsOpen(!isOpen)
    }

    const moveBackwards = () => {
        actualImage > 0 ? setActualImage(actualImage - 1 ) : setActualImage(3)
    }

    const moveForward = () => {
        actualImage < 3 ? setActualImage(actualImage + 1 ) : setActualImage(0)
    }

    return(
        <>
            <button onClick={() => setIsOpen(true)} className={styles.project__btn}>Ver más</button>
            {isOpen && 
            <div className={styles.popup}>
                <div onClick={changeValue} className={styles.popup__bg}></div>
                <section className={styles.popup__container}>
                    <button onClick={changeValue} className={styles.popup__close}>
                        <Image src={x} alt='' />
                    </button>
                    <article className={styles.popup__image__container}>
                        <button className={`${styles.popup__image__btn} ${styles.left}`} onClick={moveBackwards}>
                            <Image src={leftArrow} alt='' />
                        </button>
                        <Image className={styles.popup__image} src={groupOfImages[actualImage]} alt='' />
                        <button className={`${styles.popup__image__btn} ${styles.right}`} onClick={moveForward}>
                            <Image src={rightArrow} alt='' />
                        </button>
                    </article>
                    <article className={styles.popup__info}>
                        <h1 className={styles.popup__info__title}> {title} </h1>
                        <h2 className={styles.popup__info__subtitle}> {subtitle} </h2>
                        <p> {text} </p>
                        <div className={styles.popup__info__btns}>
                            <a href={webUrl} target='_Blank' className={styles.popup__info_webpage}>Webpage</a>
                            <a href={github} target='_Blank' className={styles.popup__info_github}>GitHub</a>
                        </div>
                    </article>
                </section>
            </div> }
        </>
    )
}