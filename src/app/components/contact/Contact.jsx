import Image from 'next/image'
import styles from './contact.module.css'
import linkedin from '@/assets/icons/bxl-linkedin-square.svg'
import mail from '@/assets/icons/bxs-envelope.svg'
import phone from '@/assets/icons/bxs-phone.svg'

export default function Contact () {
    return(
    <section name='contact' className='container'>
        <div className={styles.contact__container}>
          <article className={styles.contact__data}>
            <h2 className={styles.contact__data__subtitle}>
              Contáctame
            </h2>
            <p> Puedes contactar conmigo dejandome un mensaje, o a través de mis redes sociales para que podamos comenzar a trabajar juntos.</p>
            <span className={styles.contact__data__icons__container}><Image src={phone} alt='' width={20} /> +54 9 11 6305-7597</span>
            <a className={styles.contact__data__icons__container} href='mailto:ulimontenegro23@gmail.com'><Image src={mail} alt='' width={20} /> ulimontenegro23@gmail.com</a>
            <a className={styles.contact__data__icons__container} href='https://www.linkedin.com/in/ulisesmontenegro/' target='_Blank'><Image src={linkedin} alt='' width={20} /> Ulises Montenegro</a>
          </article>
  
          <form action="https://formspree.io/f/xdovjzka" method="POST" className={styles.contact__form}>
            <input type='text' name='name' placeholder='Nombre' className={styles.contact__form__input} />
            <input type='email' name='email' required placeholder='Email' className={styles.contact__form__input} />
            <input type='message' name='message' required placeholder='Mensaje' className={`${styles.contact__form__input} ${styles.contact__form__textarea}`} />
            <button type='submit' className={styles.contact__form__btn}>
              Enviar
            </button>
          </form>
        </div>
      </section>
    )
}