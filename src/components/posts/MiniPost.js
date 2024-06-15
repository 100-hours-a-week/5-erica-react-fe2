import { viewToK, commentToK } from "../../utils/numberToK";
import styles from "../../styles/post/MiniPost.module.css";
import { Link } from "react-router-dom";
import UserProfileImage from "../users/UserProfileImage";
import { navUrl } from "../../utils/navigate";
import { changeDate } from "../../utils/date.js";

export default function MiniPost({ data }) {
  const postTitle = data.title.slice(0, 26);

  const postView = viewToK(data.view);

  const postCommentCount = commentToK(data.commentCount ?? 0);
  return (
    <Link
      className={styles.miniBoardContainer}
      to={`${navUrl.posts}/${data.post_id}`}
    >
      <div className={styles.miniBoardWriter}>
        <div className={styles.userContainer}>
          <UserProfileImage image={data.profile_image} />
          <p className={styles.miniWriterName}>{data.nickname}</p>
        </div>
        <div className={styles.date}>📆 {changeDate(data.created_at)}</div>
      </div>
      <div className={styles.miniBoard}>
        <div className={styles.miniBoardLeft}>
          <div className={styles.titleContainer}>
            <div className={styles.postType}>
              {data.type === "other" ? "고민" : "개발"}
            </div>
            <div className={styles.miniBoardTitle}>{postTitle}</div>
          </div>
          <div className={styles.miniBoardContent}>
            <div className={styles.action}>
              <div className={styles.miniComment}>댓글 {postCommentCount}</div>
              <div className={styles.miniView}>조회수 {postView}</div>
            </div>
          </div>
        </div>
        {data.post_image ? (
          <div className={styles.boardImageContainer}>
            <img
              alt="board"
              className={styles.boardImage}
              src={data.post_image}
            />
          </div>
        ) : null}
      </div>
    </Link>
  );
}
