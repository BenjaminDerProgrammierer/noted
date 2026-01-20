import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div className={styles.page}>
      <div className={styles.hero}>
        <h1>Welcome to Noted</h1>
        <p>Your personal note-taking app.</p>

        <div className={styles.authButtons}>
          <button className={styles.silent}>Sign in</button>
          <button className={styles.primary}>Sign up</button>
        </div>
      </div>
   </div>
  );
}
