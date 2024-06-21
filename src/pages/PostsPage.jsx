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
import { useState, useEffect, useCallback, useRef } from "react";

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
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadMorePosts = useCallback(() => {
    let url = `${FetchUrl.posts}?page=${page}&size=20`;

    const params = new URLSearchParams();
    if (type) {
      params.append("type", encodeURIComponent(type));
    }
    if (search) {
      params.append("q", encodeURIComponent(search));
    }
    if (params.toString()) {
      url += `&${params.toString()}`;
    }
    return url;
  }, [page, type, search]);

  const { responseData, loading } = useFetch(loadMorePosts(), {
    headers: getHeadersWithToken(),
    credentials: "include",
  });

  useEffect(() => {
    if (responseData?.data) {
      setData((prevData) => [...prevData, ...responseData.data]);
      setHasMore(responseData.data.length > 0);
    }
  }, [responseData]);

  useEffect(() => {
    setData([]);
    setPage(0);
  }, [type, search]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      <LoadingMiniPosts
        responseData={data}
        lastPostElementRef={lastPostElementRef}
      />
      <div className={styles.target} ref={lastPostElementRef}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

function MiniPostList({ responseData, lastPostElementRef }) {
  return (
    <div className={styles.postsWrapper}>
      {responseData.map((post, index) => {
        return <MiniPost key={post.post_id} data={post} />;
      })}
      <div className={styles.target}></div>
    </div>
  );
}

const LoadingMiniPosts = withLoading(MiniPostList, "posts");
const AuthLayout = withLogIn(Layout);

export default Posts;
