import { css, Global } from "@emotion/react";
import reset from "emotion-reset";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Roboto&family=Yeon+Sung&display=swap");

  html.fixed {
    position: fixed;
    overflow-y: scroll;
    width: 100%;
  }

  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-size: 16px;
    line-height: 1;
  }

  button {
    cursor: pointer;
    background-color: inherit;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input,
  textarea {
    outline: none;
    border: 1px solid rgb(180, 180, 180);
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
