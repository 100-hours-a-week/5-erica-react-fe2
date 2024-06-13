import Comments from "../components/comments/Comments";
import { useState } from "react";
import DeletePostModal from "../components/modals/DeletePostModal";
import useFetch from "../hooks/useFetch";
import { getHeadersWithToken } from "../static";
import { useParams } from "react-router-dom";
import { AuthPostDetailPage } from "../components/posts/PostDetail";
import { FetchUrl } from "../utils/constants";
import styles from "../styles/post/PostDetailPage.module.css"

export function PostDetailPage() {
  const postId = Number(useParams().id);
  const [isPostDelete, setIsPostDelete] = useState(false);
  const { responseData, logIn, loading } = useFetch(`${FetchUrl.posts}/${postId}`, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });


  return (
    <div className={styles.detailPage}>
      <AuthPostDetailPage responseData={responseData} logIn={logIn} loading={loading} setIsPostDelete={setIsPostDelete}/>
      <Comments postId={postId} />
      <DeletePostModal
        postId={postId}
        isPostDelete={isPostDelete}
        setIsPostDelete={setIsPostDelete}
      />
    </div>
  );
}