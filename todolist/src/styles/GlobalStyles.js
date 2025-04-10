import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset & Box Sizing */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Typography & Base */
  body {
    font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    font-size: 16px;
    transition: background 0.3s ease, color 0.3s ease;
  }

  /* Smooth Scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Remove outline on click (but not for keyboard navigation) */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Button & Input Defaults */
  button, input {
    font-family: inherit;
    outline: none;
  }

  button {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  /* Scrollbar Styling (optional, looks sleek in dark mode) */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default GlobalStyles;
