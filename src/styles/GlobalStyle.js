import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #ffffff;
    --fg: #111;
    --muted: #666;
    --brand: #ff385c; 
    --card: #f7f7f7;
    --radius: 16px;
    --shadow: 0 8px 24px rgba(0,0,0,0.08);
  }
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Apple SD Gothic Neo, sans-serif;
    color: var(--fg);
    background: var(--bg);
  }
  a { color: inherit; text-decoration: none; }
  img { display:block; width:100%; height:100%; object-fit: cover; }
`;

export default GlobalStyle;