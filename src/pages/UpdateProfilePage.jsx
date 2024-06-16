import styles from "../styles/user/UpdateProfile.module.css";
import { getHeadersWithToken } from "../static";
import { AuthUpdateProfile } from "../components/users/UpdateProfileContainer";
import useFetch from "../hooks/useFetch";
import { FetchUrl } from "../utils/constants";
import MainLayout from "../components/MainLayout";

export default function UpdateProfile() {
  const { responseData, logIn } = useFetch(`${FetchUrl.user}`, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  return (
    <MainLayout>
      <section className={styles.updateMain}>
        <p className={styles.pageTitle}>프로필 수정</p>
        <AuthUpdateProfile responseData={responseData?.data} logIn={logIn} />
      </section>
    </MainLayout>
  );
}
