import { useParams } from "react-router-dom";
import styles from "../styles/post/UpdatePost.module.css";
import { getHeadersWithToken } from "../static";
import useFetch from "../hooks/useFetch";
import { AuthUpdatePost } from "../components/posts/UpdatePostContainer";
import { FetchUrl } from "../utils/constants";

export function UpdatePost() {
  const postId = Number(useParams().id);

  const {responseData,logIn, loading} = useFetch(`${FetchUrl.posts}/${postId}/update`, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  return (
    <div className={styles.container}>
      <p className={styles.pageTitle}>게시글 수정</p>
      <AuthUpdatePost responseData = {responseData?.data} postId={postId} logIn={logIn} loading={loading}/>
    </div>
  );
}

