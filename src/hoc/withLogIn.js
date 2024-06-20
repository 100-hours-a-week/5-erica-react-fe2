import { navUrl } from "../utils/navigate";
import { Navigate, useNavigate } from "react-router-dom";

export default function withLogIn(Component) {
  return function (props) {
    const navigate = useNavigate();
    if (props.error) {
      console.log(props.error);
      alert("로딩 중 에러 발생");
      return <Navigate to={navUrl.home} />;
    }

    if (props.logIn === false) {
      alert("로그인 하십시오.");
      navigate(navUrl.home);

      return null;
    }

    return <Component {...props} />;
  };
}
