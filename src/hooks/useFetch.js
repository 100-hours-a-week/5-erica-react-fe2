import { useState, useEffect } from "react";
import { navUrl } from "../utils/navigate";
import { useNavigate } from "react-router-dom";
import { FetchUrl } from "../utils/constants";

export default function useFetch(url, options) {
  const [logIn, setLogIn] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const response = await fetch(`${FetchUrl.reissue}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }
      const accessToken = response.headers.get("access");
      localStorage.setItem("access", accessToken); // 새로운 토큰 설정
      return accessToken;
    } catch (error) {
      console.error("Failed to refresh token", error);
      throw error;
    }
  };

  const fetchApi = async (retry = true) => {
    setLoading(true);
    try {
      let res = await fetch(url, options);
      if (res.status === 401 && retry) {
        try {
          const newToken = await refreshToken();
          options.headers.access = `${newToken}`;
          res = await fetch(url, options);
        } catch (refreshError) {
          setLogIn(false);
          setError(refreshError);
          setLoading(false);
          navigate(navUrl.home);
          return;
        }
      }

      const accessToken = res.headers.get("access");
      if (accessToken) {
        localStorage.setItem("access", accessToken);
      }

      const json = await res.json();
      if (json.status === 200 || json.status === 201) {
        setLogIn(true);
        setResponseData(json);
        setLoading(false);
        return;
      }
      setLoading(false);
      if (json.status === 401 || json.status === 403) {
        alert("로그인 하십시오.");
        setLogIn(false);
        setResponseData(json);
        navigate(navUrl.home);
      }

      if (json.status === 404) {
        alert("존재하지 않은 주소입니다.");
        setResponseData(json);
        navigate(navUrl.posts);
      }

      return;
    } catch (err) {
      setLogIn(false);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return { responseData, error, loading, logIn };
}
