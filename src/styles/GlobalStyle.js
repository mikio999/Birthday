import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff')
      format('woff');
  }

  * {
    box-sizing: border-box;
    font-family: 'NEXON Lv1 Gothic OTF', sans-serif;
  }

  body {
    transition: background-color 1s ease;
    font-family: "NEXON Lv1 Gothic OTF";
  }

  a {
    text-decoration: none;
    color: black;
  }


`;

export default GlobalStyle;
