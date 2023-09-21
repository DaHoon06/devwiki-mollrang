import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
  }

  body {
    background-color: var(--bg);
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }


  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    line-height: 1;
    width: 100%;
    height: calc(100% - 66px);
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  :root {
    --white: #fff;
  }

  body[data-theme="light"] {
    // major(theme)
    --primary: #00C7AE;
    --blockquote: #FFE588;
    --warning: #FF5050;

    // 출석 체크 요일
    --day_circle: #CACACA;
    --day_bg: #F4F4F4;
    --day_bg_active: #fff;
    --day_sub_text: #989898;
    --day_border_active: #00C7AE;
    --day_text_active: #00C7AE;

    --correct_border: #EDEDED;


    /**
      ICON
   */
    --blub: #FFC700;
    --check_box: #B8B8B8;
    --intro_icon: #FFC700;

    // TEXT
    --major-text: #444343;
    --caption-text: #D6D6D6;

    --bg: #fff;
    --bg_modal: #fff;
    --bg_footer: #EFEFEF;
  }

  body[data-theme="dark"] {
    --primary: #778C86;
    --blockquote: #282828;
    --waning: #FF533B;

    // 출석 체크 요일
    --day_circle: #606060;
    --day_bg: #383838;
    --day_sub_text: #A6A6A6;
    --day_bg_active: #778C86;
    --day_border_active: #fff;
    --day_text_active: #fff;

    --correct_border: #d6d6d6;

    /**
      ICON
     */
    --blub: #ECECEC;
    --check_box: #B8B8B8;
    --intro_icon: #D6D6D6;

    --major-text: #fff;
    --caption-text: #6D6D6;

    --bg: #383838;
    --bg_modal: #272727;
    --bg_footer: #505050;
  }
`;