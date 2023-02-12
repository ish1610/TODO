import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../Features/Auth/Slice/loginSlice";
import { Store } from "../../store/types/store";
import { loginAPI } from "../Features/Auth/Api/login";
import { retrieveStoredToken } from "../Features/Auth/Utils/token";
import { IHeaderProps } from "./types/header";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleLogout = useCallback(() => {
    loginAPI.logout(() => dispatch(loginAction.logout()));
  }, [dispatch]);

  const handleToggleSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsShowControl((prev) => !prev);
  };

  window.addEventListener("click", () => setIsShowControl(false));

  useEffect(() => {
    const tokenData = retrieveStoredToken();

    if (tokenData) {
      setTimeout(() => {
        handleLogout();
      }, tokenData.duration);
    }
  }, [handleLogout]);

  const headerProps: IHeaderProps = {
    onMoveRegist: () => handleMoveRegist(),
    onMoveHome: () => handleMoveHome(),
    onLogin: () => handleLogin(),
    onLogout: () => handleLogout(),
    isLogin,
    isShowControl,
    onToggleSlide: (e) => handleToggleSlide(e),
  };
  return <HeaderView {...headerProps} />;
};

export default Header;
