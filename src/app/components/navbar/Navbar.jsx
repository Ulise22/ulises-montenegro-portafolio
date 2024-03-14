'use client'
import Image from 'next/image'
import UM from '@/assets/UM.png'
import bars from '@/assets/icons/bx-menu.svg'
import x from '@/assets/icons/bx-x.svg'
import styles from './navbar.module.css'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(true);

    return(
        <nav className={styles.navbar}>
            <Image src={UM} alt='UM' />
            <div className={styles.navbar__icons__container} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <Image src={x} alt='' width={35} /> : <Image src={bars} alt='' width={35} />}
            </div>
            <ul className={isOpen ? `${styles.navbar__menu} ${styles.active}` : `${styles.navbar__menu}`}>
                <li className={styles.navbar__menu__item}><Link onClick={() => setIsOpen(false)} activeClass='active' to='home' spy smooth duration={500}>Inicio</Link></li>
                <li className={styles.navbar__menu__item}><Link onClick={() => setIsOpen(false)} activeClass='active' to='portfolio' spy smooth duration={500}>Portafolio</Link></li>
                <li className={styles.navbar__menu__item}><Link onClick={() => setIsOpen(false)} activeClass='active' to='contact' spy smooth duration={500}>Contacto</Link></li>
            </ul>
        </nav>
    )
}