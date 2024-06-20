import { Link } from "react-router-dom";
import { navUrl } from "../utils/navigate";
import logo from "../assets/images/logo.png";
import UserProfile from "./users/UserProfile";
import styles from "../styles/Navbar.module.css";
import { useShowProfile } from "../hooks/useShowProfile";
import { useLocation } from "react-router-dom";
import SearchBar from "./search/SearchBar";

export default function Navbar() {
  const { pathname } = useLocation();
  const { showProfile } = useShowProfile(pathname);
  return (
    <section className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link
          className={styles.navbarTitle}
          to={pathname === navUrl.home ? navUrl.home : navUrl.posts}
        >
          <img alt="로고이미지" src={logo} className={styles.logo} />
        </Link>
        {showProfile ? (
          <div className={styles.navbarRight}>
            <SearchBar />
            <Link className={styles.writeBtn} to={navUrl.addPost}>
              📣 새 스피치
            </Link>
            <UserProfile />
          </div>
        ) : (
          <div className={styles.emptyUserProfile}></div>
        )}
      </div>
    </section>
  );
}
