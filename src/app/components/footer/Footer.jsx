import styles from './footer.module.css'
import github from '@/assets/icons/bxl-github.svg'
import linkedin from '@/assets/icons/bxl-linkedin-square.svg'
import mail from '@/assets/icons/bxs-envelope.svg'
import Image from 'next/image'

export default function Footer () {
    return(
    <div className={styles.footer}>
      <div className={styles.footer__social}>
        <div className={styles.footer__social__container}>
            <a href='https://www.linkedin.com/in/ulisesmontenegro/' target='_Blank'><Image src={linkedin} alt='' width={40} /></a>
            <a href='https://github.com/Ulise22' target='_Blank'><Image src={github} alt='' width={40} /></a>
            <a href='mailto:ulimontenegro23@gmail.com'><Image src={mail} alt='' width={40} /></a>
        </div>
      </div>

      <div className={styles.footer__end}>
        <h4 className={styles.footer__end__phrase}>
          -Cuando no somos capaces de cambiar una situación, nos vemos obligados a cambiarnos a nosotros mismos.-
        </h4>
      </div>
    </div>
    )
}