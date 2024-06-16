import styles from "../styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  return (
    <section className={styles.container}>
      <div className={styles.main}>{children}</div>
    </section>
  );
}
