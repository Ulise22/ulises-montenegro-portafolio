import styles from './project.module.css'
import Image from "next/image";
import BtnContainer from './BtnContainer';

export default function Project ({img1, img2, img3, img4, title, subtitle, text, github, webUrl}) {
    return(
        <article name='portfolio' className={styles.project}>
            <Image className={styles.project__image} src={img1} alt="" width={350} />
            <div className={styles.project__container}>
                <h3 className={styles.project__title}> {title} </h3>
                <p className={styles.project__text}>{text}</p>
                <BtnContainer
                img1={img1} 
                img2={img2} 
                img3={img3} 
                img4={img4} 
                title={title}
                subtitle={subtitle}
                text={text}
                github={github}
                webUrl={webUrl}
                />
            </div>
        </article>
    )
}