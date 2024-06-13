
import MiniPost from "../components/posts/MiniPost";
import styles from "../styles/post/Posts.module.css";
import withLogIn from "../hoc/withLogIn";
import withLoading from "../hoc/withLoading";
import { getHeadersWithToken } from "../static";
import useFetch from "../hooks/useFetch";
import { FetchUrl } from "../utils/constants";
import Layout from "../components/Layout";
import { useLocation } from 'react-router-dom';

export function Posts() {
  const { responseData: userResponseData, logIn: userLogIn } = useFetch(`${FetchUrl.user}`, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');

  
  return (
    <AuthLayout logIn={userLogIn} responseData={userResponseData}>
      <section className={styles.postsMain}>
        {type === "coding" ? 
        <CodingPosts /> : type === "other" ? 
        <OtherPosts /> : type ==="my" ? 
        <MyPosts /> : <AllPosts />}
      </section>
    </AuthLayout>
  );
}

function AllPosts() {
  const { responseData, loading } = useFetch(FetchUrl.posts, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  return (
    <LoadingMiniPosts  loading={loading} responseData={responseData?.data} />
  )
}

function MyPosts() {
  const { responseData, loading } = useFetch(FetchUrl.myPosts, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  return (
    <LoadingMiniPosts loading={loading} responseData={responseData?.data} />
  )
}

function OtherPosts() {
  const {responseData, loading} = useFetch(FetchUrl.otherPosts, {
    headers: getHeadersWithToken(),
    credentials: "include",
  })

  return (
    <LoadingMiniPosts loading={loading} responseData={responseData?.data} />
  )
}

function CodingPosts() {
  const {responseData, loading} = useFetch(FetchUrl.codingPosts, {
    headers: getHeadersWithToken(), 
    credentials: "include"
  })

  return (
    <LoadingMiniPosts loading={loading} responseData={responseData?.data} />
  )
}


function MiniPostList({ responseData }) {
  return (
      <div className={styles.postsWrapper}>
        {responseData.map((post) => (
          <MiniPost key={post.post_id} data={post} />
        ))}
        <div className={styles.target}></div>
      </div>
  );
}

const LoadingMiniPosts = withLoading(MiniPostList, "posts");
const AuthLayout = withLogIn(Layout)

export default Posts;


