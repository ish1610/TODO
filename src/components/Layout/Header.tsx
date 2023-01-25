import { useNavigate } from "react-router-dom";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();

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
  };
  return <HeaderView {...headerProps} />;
};

export default Header;
