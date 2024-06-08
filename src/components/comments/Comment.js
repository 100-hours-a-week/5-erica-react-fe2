import DeleteCommentModal from "../modals/DeleteCommentModal.js";
import { disableScroll } from "../../utils/scroll.js";
import { checkCommentOwner } from "../../utils/checkOwner.js";
import { useState, useMemo } from "react";
import styles from "../../styles/comment/Comment.module.css";
import UserProfileImage from "../users/UserProfileImage.js";
import { changeDate } from "../../utils/date.js";

export default function Comment({ data, postId, setIsAdd, setUpdateTarget }) {
  const [isCommentDelete, setIsCommentDelete] = useState(false);

  const handleClick = async (action) => {
    const checkResponseData = await checkCommentOwner({
      postId,
      commentId: data.comment_id,
    });
    console.log(checkResponseData);
    if (checkResponseData.status === 403) {
      alert("본인이 작성한 댓글이 아닙니다.");
      return;
    }

    if (action === "update") {
      setUpdateTarget({ commentId: data.comment_id, comment: data.comment });
      setIsAdd(false);
    } else if (action === "delete") {
      disableScroll();
      setIsCommentDelete(true);
    }
  };

  const memoizedHandleClick = useMemo(
    () => handleClick,
    [postId, data, setIsAdd, setUpdateTarget]
  );

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.commentHeader}>
          <div className={styles.commentWriter}>
            <input type="hidden" id="commentId" value={data.comment_id} />
            <UserProfileImage image={data.member.profile_image} size={36} />
            <div className={styles.commentWriterName}>
              {data.member.nickname}
            </div>
            <div className={styles.commentWriterDate}>
              {changeDate(data.created_at)}
            </div>
          </div>
          <div className={styles.commentButton}>
            <button
              onClick={() => memoizedHandleClick("update")}
              className={styles.commentUpdate}
            >
              ✏️
            </button>
            <button
              onClick={() => memoizedHandleClick("delete")}
              className={styles.commentDelete}
            >
              🗑️
            </button>
          </div>
        </div>
        <div className={styles.commentBody}>{data.comment}</div>
      </div>
      <DeleteCommentModal
        postId={postId}
        commentId={data.comment_id}
        isCommentDelete={isCommentDelete}
        setIsCommentDelete={setIsCommentDelete}
      />
    </>
  );
}
