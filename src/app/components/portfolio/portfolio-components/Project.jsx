import styles from './project.module.css'
import Image from "next/image";
import img from '@/assets/projects/space-tourism/spacetourism1.jpg'
import BtnContainer from './BtnContainer';

export default function Project () {
    return(
        <article className={styles.project}>
            <Image className={styles.project__image} src={img} alt="" width={350} />
            <div className={styles.project__container}>
                <h3 className={styles.project__title}>Space Tourism</h3>
                <p className={styles.project__text}>Un desafío de Frontend Mentor que xca sd as da das dafwa </p>
                <BtnContainer />
            </div>
        </article>
    )
}