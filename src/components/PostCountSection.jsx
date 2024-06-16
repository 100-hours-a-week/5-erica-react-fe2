import styles from "../styles/PostCountSection.module.css";
import useFetch from "../hooks/useFetch";
import { backHost, headersNoToken } from "../static";
import { useNavigate } from "react-router-dom";
import { navUrl } from "../utils/navigate";

export default function PostCountSection() {
  const { responseData } = useFetch(`${backHost}/api/posts/info`, {
    headers: headersNoToken,
    credentials: "include",
  });

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(navUrl.posts);
  };

  return (
    <div className={styles.section}>
      <div className={styles.countContainer}>
        <div className={styles.title}>📣 지금까지 시작된 스피치</div>
        <div className={styles.count}>{responseData?.data} 개</div>
        <div onClick={handleClickButton} className={styles.moveButton}>
          구경하러 가기
        </div>
      </div>
    </div>
  );
}
