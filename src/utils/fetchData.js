import { headersNoToken, getHeadersWithToken } from "../static";

export const apiRequest = async ({ url, method, body: requestBody }) => {
  try {
    const options = {
      method,
      headers: getHeadersWithToken(),
      body: JSON.stringify(requestBody),
      credentials: "include",
    };
    const response = await fetch(url, options);
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

export const apiRequestNoAuth = async ({ url, method, body: requestBody }) => {
  try {
    const options = {
      method,
      headers: headersNoToken,
      body: JSON.stringify(requestBody),
      credentials: "include",
    };

    const response = await fetch(url, options);
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
