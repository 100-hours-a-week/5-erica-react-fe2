import styles from "../styles/DescriptionSection.module.css";
import Lottie from "lottie-react";
import computerLottie from "../assets/lotties/computer.json";

export default function DescriptionSection() {
  return (
    <div className={styles.section}>
      <div className={styles.descriptionContainer}>
        <div className={styles.title}>스피치</div>
        <Lottie className={styles.lottie} animationData={computerLottie} />
        <div className={styles.content}>신입/경력 상관없이 누구나</div>
        <div className={styles.content}>자신만의 스피치를</div>
        <div className={styles.content}>이어나갈 수 있어요!</div>
      </div>
    </div>
  );
}
