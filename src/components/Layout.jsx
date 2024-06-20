import styles from "../styles/Layout.module.css";
import { Link } from "react-router-dom";
import { navUrl } from "../utils/navigate";
import UserProfileImage from "./users/UserProfileImage";
import useFetch from "../hooks/useFetch";
import { backHost } from "../static";
import { getHeadersWithToken } from "../static";
import side_banner from "../assets/images/side_banner.png";
import withLogIn from "../hoc/withLogIn";
import { useLocation } from "react-router-dom";

export default function Layout({ children, logIn, responseData }) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get("type");

  if (!responseData) {
    return null;
  }

  return (
    <>
      <div className={styles.top}>
        <Link
          to={navUrl.posts}
          className={type === null ? `${styles.tabClicked}` : `${styles.tab}`}
        >
          전체
        </Link>
        <Link
          to={navUrl.codingPosts}
          className={
            type === "coding" ? `${styles.tabClicked}` : `${styles.tab}`
          }
        >
          개발
        </Link>
        <Link
          to={navUrl.otherPosts}
          className={
            type === "other" ? `${styles.tabClicked}` : `${styles.tab}`
          }
        >
          고민
        </Link>
        <Link
          to={navUrl.myPosts}
          className={type === "my" ? `${styles.tabClicked}` : `${styles.tab}`}
        >
          MY 글
        </Link>
      </div>
      <div className={styles.layout}>
        <AuthLayout logIn={logIn} responseData={responseData} />
        {children}
      </div>
    </>
  );
}

const AuthLayout = withLogIn(SideContainer);

function SideContainer({ responseData }) {
  const { responseData: countResponseData } = useFetch(
    `${backHost}/api/users/myWrite`,
    {
      headers: getHeadersWithToken(),
      credentials: "include",
    }
  );

  return (
    <div className={styles.sideContainer}>
      <div className={styles.sideProfile}>
        <div className={styles.profileContainer}>
          <UserProfileImage image={responseData?.data.profileImage} size={40} />
          <strong>🚀 {responseData?.data.nickname}</strong>
        </div>
        <hr />
        <div className={styles.bottomContainer}>
          <div className={styles.count}>
            <span>내 스피치</span>
            {countResponseData?.data ? countResponseData?.data.postCount : 0}
          </div>
          <div className={styles.count}>
            <span>내 리스피치</span>
            {countResponseData?.data ? countResponseData?.data.commentCount : 0}
          </div>
        </div>
      </div>
      <div className={styles.writeContainer}></div>
      <div className={styles.advertisement}>
        <div className={styles.title}>광고</div>
        <img src={side_banner} alt="사이드 배너" className={styles.sideBaner} />
      </div>
    </div>
  );
}
