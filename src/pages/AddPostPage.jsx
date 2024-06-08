import styles from "../styles/post/AddPost.module.css";
import  AddPostContainer  from "../components/posts/AddPostContainer";

export function AddPost() {
  return (
    <div className={styles.addPost}>
      <p className={styles.pageTitle}>게시글 작성</p>
      <AddPostContainer  />
    </div>
  );
}

