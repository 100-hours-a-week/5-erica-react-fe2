import styles from "../styles/user/UpdatePassword.module.css";
import UpdatePasswordContainer from "../components/users/UpdatePasswordContainer";

export default function UpdatePassword() {
  return (
    <section className={styles.passwordMain}>
      <p className={styles.pageTitle}>비밀번호 수정</p>
      <UpdatePasswordContainer  />
    </section>
  );
}



