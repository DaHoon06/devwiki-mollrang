import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    min-width: 320px;
    color: var(--textDefault);
    /* -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased; */
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

  a {
    cursor: pointer;
    text-decoration: none;
  }

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
    font-family: 'BMJua', 'Noto Sans KR', 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
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
    ${({ theme }) => theme.scroll.theme()}
  }

  body {
    width: 100%;
    height: 100%;
  }

  #__next {
    width: 100%;
    height: 100%;
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

  hr {
    height: 1px;
    border: none;
    border-bottom: 1px solid #ededed;
  }

  :root {
    --white: #fff;
  }

  html,
  body, body[data-theme="light"] {
    // major(theme)
    --primary: #00C7AE;
    --blockquote: #FFE588;
    --secondary: #FFC700;
    --warning: #FF5050;
    --primary_opacity: rgba(0, 199, 174, 0.7);
    --error_opacity: rgba(255, 80, 80, 0.7);
    --warning_opacity: rgba(229, 175, 0, 0.7);

    // Typography - light
    --textDefault: #444343;
    --textWhite: #fff;
    --textPrimary: #00C7AE;
    --textBlack000: #000;
    --textBlack100: #222;
    --textBlack200: #0e0e0e;
    --textGray000: #969696;
    --textGray100: #989898;
    --textGray200: #C6C6C6;
    --textGray300: #C6C6C6;
    --textGray400: #818181;
    --textGray500: #989898;
    --textRed000: #FF5050;
    --textGrayAndWhite: #bdbdbd;
    --textYellow: #edbe17;

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
    --share_icon: #444343;
    --check_circle_icon: #B8B8B8;
    --hamburger_icon: #00C7AE;
    // TEXT
    --major-text: #444343;
    --caption-text: #D6D6D6;

    --bg: #fff;
    --bg_reverse: #383838;
    --bg_modal: #fff;
    --bg_footer: #EFEFEF;
    --bg_input: #FDFDFD;
    --bg_line: #f1f1f1;
    --bg_floating_button: #FFC700;

    --icon_default: #535353;
  }

  body[data-theme="dark"] {
    --primary: #778C86;
    --blockquote: #282828;
    --secondary: #FFC700;
    --warning: #FF533B;
    --primary_opacity: rgba(119, 140, 134, 0.7);
    --error_opacity: rgba(255, 80, 80, 0.7);
    --warning_opacity: rgba(255, 199, 0, 0.7);


    // Typography - dark
    --textDefault: #fff;
    --textWhite: #fff;
    --textPrimary: #778C86;
    --textBlack000: #000;
    --textBlack100: #222;
    --textBlack200: #0e0e0e;
    --textGray000: #969696;
    --textGray100: #A6A6A6;
    --textGray200: #C6C6C6;
    --textGray300: #C6C6C6;
    --textGray400: #818181;
    --textGray500: #989898;
    --textRed000: #FF5050;
    --textGrayAndWhite: #fff;
    --textYellow: #FFC700;
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
    --share_icon: #fff;
    --check_circle_icon: #B8B8B8;
    --hamburger_icon: #fff;

    --major-text: #E6E6E6;
    --caption-text: #6D6D6;

    --bg: #383838;
    --bg_reverse: #fff;
    --bg_modal: #272727;
    --bg_footer: #505050;
    --bg_input: #FDFDFD;
    --bg_line: #575757;
    --bg_floating_button: #5f5f5f;

    --icon_default: #535353;
  }
`;
