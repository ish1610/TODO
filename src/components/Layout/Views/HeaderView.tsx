import styled from "@emotion/styled";
import React from "react";
import logo from "../../../assets/images/homeBackground.png";
import { blue, orange } from "../../Common/styles/commonColor";
import { flexCenter } from "../../Common/styles/FlexCenter";
import { IHeaderProps, ThemeShowControl } from "../types/header";
import { FaHamburger } from "react-icons/fa";

const HeaderWrap = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 20px 22px;
  height: 80px;
  border-bottom: 1px solid ${blue};

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

const HeaderLogoWrap = styled.div`
  ${flexCenter}
  flex-direction: column;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 16px;
  }
`;

const NavControler = styled.nav`
  @media (max-width: 750px) {
    display: none;
  }
`;

const NavControlerSlide = styled.div<ThemeShowControl>`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 5;

  .slideDown-btn {
    color: ${blue};
    font-size: 24px;
    transition: 0.2s;
  }
  .slideDown-btn:hover {
    color: ${orange};
  }

  .slideWrap {
    background-color: rgba(0, 0, 0, 0.2);
    width: 200px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    position: absolute;
    top: calc(100% + 4px);
    right: -6px;
    visibility: ${(props) => (props.isShowControl ? "visible" : "hidden")};
    opacity: ${(props) => (props.isShowControl ? "1" : "0")};
    transition: 0.4s;
  }

  .arrow {
    width: 20px;
    height: 10px;
    position: absolute;
    top: -10px;
    right: 12px;
    overflow: hidden;
  }

  .arrow::before {
    content: "";
    width: 12px;
    height: 12px;
    border: 1px solid #ccc;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 50%;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }

  ul {
    margin-top: 10px;
  }

  li {
    ${flexCenter}
    flex-direction: column;
    margin-bottom: 10px;
  }
  li button {
    width: 100%;
    border-radius: 8px;
    padding: 8px 0;
    margin-bottom: 20px;
    transition: 0.2s;
  }
  li button:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
  }
  li button:hover {
    color: #fff;
    background-color: ${orange};
  }

  @media (max-width: 750px) {
    display: block;
  }
`;

const HeaderView = ({
  onMoveRegist,
  onMoveHome,
  handleLogin,
  isLogin,
  isShowControl,
  onToggleSlide,
}: IHeaderProps) => {
  return (
    <HeaderWrap>
      <HeaderLogoWrap onClick={onMoveHome}>
        <img src={logo} alt="ToDo's logo" />
        <h1>ToDo's</h1>
      </HeaderLogoWrap>

      <NavControler>
        {isLogin && <button>로그아웃</button>}

        {!isLogin && (
          <React.Fragment>
            <button onClick={handleLogin}>로그인</button>
            <button onClick={onMoveRegist}>회원가입</button>
          </React.Fragment>
        )}
      </NavControler>

      <NavControlerSlide isShowControl={isShowControl}>
        <button className="slideDown-btn" onClick={onToggleSlide}>
          <FaHamburger />
        </button>

        <div className="slideWrap">
          <div className="arrow"></div>
          <ul>
            {!isLogin && (
              <li>
                <button onClick={handleLogin}>로그인</button>
                <button onClick={onMoveRegist}>회원가입</button>
              </li>
            )}
            {isLogin && (
              <li>
                <button>로그아웃</button>
              </li>
            )}
          </ul>
        </div>
      </NavControlerSlide>
    </HeaderWrap>
  );
};

export default HeaderView;
