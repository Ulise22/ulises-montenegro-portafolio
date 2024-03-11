import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Portfolio />
      <Contact />
    </main>
  );
}
