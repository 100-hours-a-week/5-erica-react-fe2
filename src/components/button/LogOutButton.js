import styles from "../../styles/button/LogoutButton.module.css";
import { navUrl } from "../../utils/navigate";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FetchUrl } from "../../utils/constants";
import { getHeadersWithToken } from "../../static";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [logoutStatus, setLogoutStatus] = useState(null);

  const handleClickLogOut = useCallback(async () => {
    try {
      setLogoutStatus("loading");
      const response = await fetch({
        url: FetchUrl.logOut,
        headers: getHeadersWithToken(),
        credentials: "include",
        method: "POST"
      });

      if (response.status !== 200) {
        setLogoutStatus("fail");
        alert("로그아웃 실패. 다시 시도하세요.");
        return;
      }

      localStorage.removeItem("access");
      setLogoutStatus("success");
      alert("로그아웃 됐습니다.");
      navigate(navUrl.home);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }, [navigate]);

  return (
    <button
      onClick={handleClickLogOut}
      className={`${styles.logOut} ${styles.setting}`}
      disabled={logoutStatus === "loading"}
    >
      로그아웃
    </button>
  );
}
