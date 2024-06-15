import styles from "../styles/Layout.module.css"
import { Link } from "react-router-dom"
import { navUrl } from "../utils/navigate"
import UserProfileImage from "./users/UserProfileImage"
import useFetch from "../hooks/useFetch"
import { backHost } from "../static"
import { getHeadersWithToken } from "../static"
import side_banner from "../images/side_banner.png"
import {useState} from 'react';
import withLogIn from "../hoc/withLogIn"

export default function Layout({children, logIn, responseData}) {
  const [clickedTab, setClickedTab] = useState("전체");

  if (!responseData) {
    return null;
  }

  return (
    <>
    <div className={styles.top}>
      <Link to={navUrl.posts} onClick={() => {setClickedTab("전체")}} className={clickedTab === "전체" ? `${styles.tabClicked}`: `${styles.tab}`}>전체</Link>
      <Link to={navUrl.codingPosts} onClick={() => {setClickedTab("개발")}} className={clickedTab === "개발" ? `${styles.tabClicked}`: `${styles.tab}`}>개발</Link>
      <Link to={navUrl.otherPosts} onClick={() => {setClickedTab("고민")}} className={clickedTab === "고민" ? `${styles.tabClicked}`: `${styles.tab}`}>고민</Link>
      <Link to={navUrl.myPosts} onClick={() => {setClickedTab("MY글")}} className={clickedTab === "MY글" ? `${styles.tabClicked}`: `${styles.tab}`}>MY 글</Link>
    </div>
    <div className={styles.layout}>
      <AuthLayout logIn={logIn} responseData={responseData} />
      {children}
    </div></>
  )
}

const AuthLayout= withLogIn(SideContainer);

function SideContainer({ responseData}) {
  const {responseData: countResponseData} = useFetch(`${backHost}/api/users/myWrite`, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  return (
    <div className={styles.sideContainer}>
    <div className={styles.sideProfile}>
      <div className={styles.profileContainer}>
        <UserProfileImage image={responseData?.data.profileImage} size={40}/>
        <strong>🚀 {responseData?.data.nickname}</strong>
      </div>
      <hr />
      <div className={styles.bottomContainer}>
        <div className={styles.count}>
          <span>내 스피치</span>
          {countResponseData?.data ? countResponseData?.data.postCount : 0 }
        </div>
        <div className={styles.count}>
          <span>내 커멘트</span>
          {countResponseData?.data ? countResponseData?.data.commentCount : 0 }
        </div>
      </div>
    </div>
    <div className={styles.writeContainer}>
    </div>
    <div className={styles.advertisement}>
      <div className={styles.title}>광고</div>
      <img src={side_banner} alt="사이드 배너" className={styles.sideBaner}/>
    </div>

  </div>
  )
}