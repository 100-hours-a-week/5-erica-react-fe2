import { headersNoToken, headersWithToken } from "../static";

export const apiRequest = async ({ url, method, body: requestBody }) => {
  try {
    const options = {
      method,
      headers: headersWithToken,
      body: JSON.stringify(requestBody),
      credentials: "include",
    };

    const response = await fetch(url, options);
    const responseData = await response.json();

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

    return responseData;
  } catch (error) {
    console.error(`Error with request to ${url}:`, error);
    throw error;
  }
};
