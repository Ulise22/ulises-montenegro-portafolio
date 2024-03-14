import Image from 'next/image'
import profile from '@/assets/profile_image.png'
import github from '@/assets/icons/bxl-github.svg'
import linkedin from '@/assets/icons/bxl-linkedin-square.svg'
import mail from '@/assets/icons/bxs-envelope.svg'
import styles from './hero.module.css'

export default function Hero () {
    return(
        <section name='home' className={styles.hero}>
            <article className={styles.hero__container}>
                <Image className={styles.hero__image} src={profile} alt='' />
                <div className={styles.hero__info}>
                    <h1 className={styles.hero__info__title}>Ulises Montenegro</h1>
                    <h3 className={styles.hero__info__subtitle}>Desarrollador Frontend</h3>
                    <section className={styles.hero__info__items}>
                        <a href='https://www.linkedin.com/in/ulisesmontenegro/' target='_Blank'><Image src={linkedin} alt='' width={40} /></a>
                        <a href='https://github.com/Ulise22' target='_Blank'><Image src={github} alt='' width={40} /></a>
                        <a href='mailto:ulimontenegro23@gmail.com'><Image src={mail} alt='' width={40} /></a>
                        <a href="./ulises-montenegro.pdf" download className={styles.hero__info__items__btn} title='CV'>Descargar CV</a>
                    </section>
                </div>
            </article>
        </section>
    )
}