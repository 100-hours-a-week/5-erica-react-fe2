export const backHost = "https://opensquare.kro.kr";

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
