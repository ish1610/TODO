import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Store } from "../../store/types/store";
import { IHeaderProps } from "./types/header";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: Store) => state.login.isLogin);
  const [isShowControl, setIsShowControl] = useState(false);

  const handleMoveRegist = () => {
    navigate("/signUp");
  };

  const handleMoveHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleToggleSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsShowControl((prev) => !prev);
  };

  window.addEventListener("click", () => setIsShowControl(false));

  const headerProps: IHeaderProps = {
    onMoveRegist: () => handleMoveRegist(),
    onMoveHome: () => handleMoveHome(),
    handleLogin: () => handleLogin(),
    isLogin,
    isShowControl,
    onToggleSlide: (e) => handleToggleSlide(e),
  };
  return <HeaderView {...headerProps} />;
};

export default Header;
