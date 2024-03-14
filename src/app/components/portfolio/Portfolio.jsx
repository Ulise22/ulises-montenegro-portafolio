import styles from './portfolio.module.css'
import Project from "./portfolio-components/Project";
//Fullmma 
import fullmma1 from '@/assets/projects/fullmma/fullmma1.jpg'
import fullmma2 from '@/assets/projects/fullmma/fullmma2.jpg'
import fullmma3 from '@/assets/projects/fullmma/fullmma3.jpg'
import fullmma4 from '@/assets/projects/fullmma/fullmma4.jpg'
//Windbnb
import windbnb1 from '@/assets/projects/windbnb/windbnb1.jpg'
import windbnb2 from '@/assets/projects/windbnb/windbnb2.jpg'
import windbnb3 from '@/assets/projects/windbnb/windbnb3.jpg'
import windbnb4 from '@/assets/projects/windbnb/windbnb4.jpg'
//Space Tourism
import spacetourism1 from '@/assets/projects/space-tourism/spacetourism1.jpg'
import spacetourism2 from '@/assets/projects/space-tourism/spacetourism2.jpg'
import spacetourism3 from '@/assets/projects/space-tourism/spacetourism3.jpg'
import spacetourism4 from '@/assets/projects/space-tourism/spacetourism4.jpg'
//E-Commerce
import ecommerce1 from '@/assets/projects/e-commerce/e-commerce1.jpg'
import ecommerce2 from '@/assets/projects/e-commerce/e-commerce2.jpg'
import ecommerce3 from '@/assets/projects/e-commerce/e-commerce3.jpg'
import ecommerce4 from '@/assets/projects/e-commerce/e-commerce4.jpg'
//Random Quote
import randomQuote1 from '@/assets/projects/random-quote/random-quote1.jpg'
import randomQuote2 from '@/assets/projects/random-quote/random-quote2.jpg'
import randomQuote3 from '@/assets/projects/random-quote/random-quote3.jpg'
import randomQuote4 from '@/assets/projects/random-quote/random-quote4.jpg'
//Defensa y Justicia
import dyj1 from '@/assets/projects/dyj/dyj1.jpg'
import dyj2 from '@/assets/projects/dyj/dyj2.jpg'
import dyj3 from '@/assets/projects/dyj/dyj3.jpg'
import dyj4 from '@/assets/projects/dyj/dyj4.jpg'

export default function Portfolio () {
    return(
        <section className={styles.portfolio}>
            <h2 className={styles.portfolio__title}>Portafolio</h2>
            <div className={styles.portfolio__container}>
                <Project img1={fullmma1}
                img2={fullmma2} 
                img3={fullmma3} 
                img4={fullmma4} 
                title='Fullmma'
                subtitle='Un Blog Personal Sobre las Artes Marciales Mixtas'
                text='Haciendo uso de la versión 14 de Next JS, cree una página web, adaptada a disposivos móbiles, donde cubro todo lo relacionado a la UFC y a las artes marciales mixtas en general. Contando con más de 60 artículos por el momento.'
                github='https://github.com/Ulise22/promma'
                webUrl='https://fullmma.org/'
                />
                <Project img1={spacetourism1}
                img2={spacetourism2} 
                img3={spacetourism3} 
                img4={spacetourism4} 
                title='Space Tourism'
                subtitle='Un Reto de FrontendMentor Hecho con Next JS'
                text='Completé el reto de Frontend Mentor usando Nextjs. Usé el documento de Figma proporcionado por la misma página para lograr que el diseño de la web se vea lo más cercano posible al original, tanto en escritorio como en móvil.'
                github='https://github.com/Ulise22/space-tourism'
                webUrl='https://space-tourism-two-jet.vercel.app/'
                />
                <Project img1={windbnb1}
                img2={windbnb2} 
                img3={windbnb3} 
                img4={windbnb4} 
                title='Windbnb'
                subtitle='Un Desafío de DevChallenge Hecho con React y Typescript'
                text='Utilizando React, completé el reto de devChallenges.io, donde tomando un archivo .json para que, usando los datos que este archivo provee, armar una app en la que se muestran diferentes inmuebles, que pueden ser filtrados por la locación y por la cantidad máxima de personas que pueden habitar dicho inmueble.'
                github='https://github.com/Ulise22/windbnb-challenge'
                webUrl='https://windbnb-challenge-nu.vercel.app/'
                />
                <Project img1={ecommerce1}
                img2={ecommerce2} 
                img3={ecommerce3} 
                img4={ecommerce4} 
                title='E-Commerce Product Page'
                subtitle='Un Desafío de FrontendMentor Hecho con React'
                text='Completé el reto &quot;E-commerce product page&quot; de Frontend Mentor usando React, creando una app totalmente que también se adapta a dispositivos móbiles. En la aplicación se puede hacer click a cualquiera de las imagenes para verlas en mejor calidad, y se puede cambiar a cualquier otra imagen que se desee ver, además se puede agregar y quitar la cantidad deseada del producto al carrito.'
                github='https://github.com/Ulise22/e-comerce-product-page'
                webUrl='https://e-comerce-product-page.vercel.app/'
                />
                <Project img1={randomQuote1}
                img2={randomQuote2} 
                img3={randomQuote3} 
                img4={randomQuote4} 
                title='Random Quote'
                subtitle='Un Desafío de DevChallenge Hecho con React y Typescript'
                text='Utilizando React, Typescript y consumiendo la API de Quote-Garden fui capaz de terminar el reto de devChallenge, donde consumí la API dada por la página, para mostrar una cita aleatoria en pantalla, que cambia cada vez que se recarga la app o cuando se hace click en el botón &quot;random&quot;, con el nombre del autor debajo, que al hacer click en el nombre, te muestra una lista de todas sus frases disponibles en la API.'
                github='https://github.com/Ulise22/random-quote-generator-devchallenge'
                webUrl='https://random-quote-generator-ulise22.vercel.app/'
                />
                <Project img1={dyj1}
                img2={dyj2} 
                img3={dyj3} 
                img4={dyj4} 
                title='Defensa y Justicia Fanpage'
                subtitle='Una App Sobre la Entidad Polideportiva Defensa y Justicia Usando Next y Redux'
                text='Utilizando React 13, hice una página web sobre el club de fútbol Defensa y Justicia, donde muestro algunas noticias sobre el club y donde integré una especie de tienda online, en la que pueden agregarse y eliminarse productos del club del carrito, haciendo uso de un estado global con Redux para conseguirlo.'
                github='https://github.com/Ulise22/dyj-fanpage'
                webUrl='https://dyj-fanpage.vercel.app/'
                />
            </div>
        </section>
    )
}