import MiniPost from "../components/posts/MiniPost";
import styles from "../styles/post/Posts.module.css";
import withLogIn from "../hoc/withLogIn";
import withLoading from "../hoc/withLoading";
import { getHeadersWithToken } from "../static";
import useFetch from "../hooks/useFetch";
import { FetchUrl } from "../utils/constants";
import Layout from "../components/Layout";
import MainLayout from "../components/MainLayout";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Posts() {
  const { responseData: userResponseData, logIn: userLogIn } = useFetch(
    `${FetchUrl.user}`,
    {
      headers: getHeadersWithToken(),
      credentials: "include",
    }
  );

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [type, setType] = useState(searchParams.get("type"));
  const [search, setSearch] = useState(searchParams.get("q"));

  useEffect(() => {
    setType(searchParams.get("type"));
    setSearch(searchParams.get("q"));
  }, [location]);

  return (
    <MainLayout>
      <AuthLayout logIn={userLogIn} responseData={userResponseData}>
        <section className={styles.postsMain}>
          <AllPosts type={type} search={search} />
        </section>
      </AuthLayout>
    </MainLayout>
  );
}

function AllPosts({ type, search }) {
  const [newUrl, setNewUrl] = useState(FetchUrl.posts);
  const [data, setData] = useState(null);

  useEffect(() => {
    let url = FetchUrl.posts;

    const params = new URLSearchParams();
    if (type) {
      params.append("type", encodeURIComponent(type));
    }
    if (search) {
      params.append("q", encodeURIComponent(search));
    }
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
    console.log("NewUrl: " + url);
    setNewUrl(url);
  }, [type, search]);

  const { responseData, loading } = useFetch(newUrl, {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  useEffect(() => {
    setData(responseData?.data);
  }, [responseData]);

  return <LoadingMiniPosts loading={loading} responseData={data} />;
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
const AuthLayout = withLogIn(Layout);

export default Posts;
