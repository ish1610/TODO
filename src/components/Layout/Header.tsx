import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();

  const handleMoveRegist = () => {
    navigate("/joinIn");
  };

  const handleMoveHome = () => {
    navigate("/");
  };

  const headerProps = {
    onMoveRegist: () => handleMoveRegist(),
    onMoveHome: () => handleMoveHome(),
  };
  return <HeaderView {...headerProps} />;
};

export default Header;
