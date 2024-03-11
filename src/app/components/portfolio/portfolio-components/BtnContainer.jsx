'use client'
import { useState } from 'react'
import styles from './project.module.css'
import ProjectPopup from './ProjectPopup'

export default function BtnContainer () {
    const [isOpen, setIsOpen] = useState(false)
    const changeValue = () => {
        setIsOpen(!isOpen)
    }
    return(
        <>
            <button onClick={() => setIsOpen(true)} className={styles.project__btn}>Ver más</button>
            {isOpen && <div>
            <h1>HOlaa</h1>
            <button onClick={changeValue}>xd</button>
        </div> }
        </>
    )
}