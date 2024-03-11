import styles from './portfolio.module.css'
import Project from "./portfolio-components/Project";


export default function Portfolio () {
    return(
        <section className={styles.portfolio}>
            <h2 className={styles.portfolio__title}>Portafolio</h2>
            <div className={styles.portfolio__container}>
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}