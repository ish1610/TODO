import { css, Global } from "@emotion/react";
import reset from "emotion-reset";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&family=Roboto&display=swap");

  ${reset}

  body {
    font-family: "Roboto", "Nanum Gothic", sans-serif;
    font-size: 16px;
    line-height: 1;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={styles} />;
};

export default GlobalStyle;
