import { css } from 'styled-components';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

const MDXStyle = css`
  * {
    font-size: 18px;
    line-height: 1.55;
    letter-spacing: 0;
    font-family: 'Ieter', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 800;
    margin: 20px 0;
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    font-size: 24px;
  }

  // 줄바꿈
  p {
    margin: 10px 0;
  }

  // 강조 글씨
  p > code {
    font-weight: 800;
    border-bottom: 2px solid var(--focus-text);
    margin: 0 1px;
  }
  li > code {
    font-weight: 800;
    border-bottom: 2px solid var(--focus-text);
    margin: 0 1px;
  }

  // 코드 블록
  pre > code {
    font-weight: 400;
    border-radius: 10px !important;
  }

  // 리스트
  ul,
  ol {
    margin: 10px;
  }

  li {
    margin: 10px;
    list-style: disc;
  }

  // 볼드체
  strong {
    font-weight: 800;
  }

  // '>' 표시
  blockquote {
    margin: 0;
    padding: 1px 10px;
    color: var(--focus-text);
    background-color: var(--focus-bg);
    border-radius: 10px;

    p > code {
      font-weight: 700;
    }
  }
`;

export default MDXStyle;
