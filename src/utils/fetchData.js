import { headersNoToken, getHeadersWithToken } from "../static";
import { FetchUrl } from "./constants";

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

export const apiRequest = async ({ url, method, body: requestBody }) => {
  const makeRequest = async (retry = true) => {
    try {
      const options = {
        method,
        headers: getHeadersWithToken(),
        body: JSON.stringify(requestBody),
        credentials: "include",
      };
      const response = await fetch(url, options);
      const responseData = await response.json();

      const accessToken = response.headers.get("access");
      if (accessToken) {
        localStorage.setItem("access", accessToken);
      }

      if (response.status === 401 && retry) {
        try {
          const newToken = await refreshToken();
          options.headers.Authorization = `Bearer ${newToken}`;
          return await makeRequest(false);
        } catch (refreshError) {
          throw new Error("Failed to refresh token and retry request");
        }
      }

      return responseData;
    } catch (error) {
      console.error(`Error with request to ${url}:`, error);
      throw error;
    }
  };
  return await makeRequest();
};

export const apiRequestNoAuth = async ({ url, method, body: requestBody }) => {
  try {
    const options = {
      method,
      headers: headersNoToken,
      body: JSON.stringify(requestBody),
      credentials: "include",
    };

    const response = await fetch(url, options);
    const accessToken = response.headers.get("access");
    if (accessToken) {
      localStorage.setItem("access", accessToken);
    }
    const responseData = await response.json();

    const newToken = response.headers.get("Authorization");
    if (newToken) {
      const tokenParts = newToken.split(" ");
      if (tokenParts.length === 2 && tokenParts[0] === "Bearer") {
        localStorage.setItem("token", tokenParts[1]);
      }
    }

    return responseData;
  } catch (error) {
    console.error(`Error with request to ${url}:`, error);
    throw error;
  }
};
