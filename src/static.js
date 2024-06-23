export const backHost = "http://ec2-13-125-22-74.ap-northeast-2.compute.amazonaws.com/";

export const headersNoToken = {
  "Access-Control-Allow-Origin": "*",
  "ngrok-skip-browser-warning": "69420",
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const getHeadersWithToken = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    "ngrok-skip-browser-warning": "69420",
    "Content-Type": "application/json",
    Accept: "application/json",
    access: `${localStorage.getItem("access")}`,
  };
};
