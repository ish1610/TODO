import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderView from "./Views/HeaderView";

const Header = () => {
  const navigate = useNavigate();

  const handleMoveRegist = () => {
    navigate("/joinIn");
  };

  const headerProps = {
    handleMoveRegist: () => handleMoveRegist(),
  };
  return <HeaderView {...headerProps} />;
};

export default Header;
