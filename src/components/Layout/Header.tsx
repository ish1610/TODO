import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Store } from "../../store/types/store";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: Store) => state.login.isLogin);
  console.log(isLogin);

  const handleMoveRegist = () => {
    navigate("/signUp");
  };

  const handleMoveHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const headerProps = {
    onMoveRegist: () => handleMoveRegist(),
    onMoveHome: () => handleMoveHome(),
    handleLogin: () => handleLogin(),
    isLogin,
  };
  return <HeaderView {...headerProps} />;
};

export default Header;
