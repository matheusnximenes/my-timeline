import Timeline from "@/components/timeline";
import styles from "../styles/main.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <Image
          alt="logo"
          src="https://www.jw.org/assets/ct/5fbcfe1e6c/images/siteLogo-jworg-large.svg"
          width={90}
          height={90}
        />
        <h1>Jehovah’s Witnesses</h1>
      </header>
      <div className={styles.content}>
        <aside className={styles.aside}>drawer</aside>
        <main className={styles.main}>
          <h1 className={styles.title}>Bible Timeline</h1>
          <Timeline />
        </main>
      </div>
    </div>
  );
}
