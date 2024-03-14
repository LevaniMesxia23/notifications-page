import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5% ;
  }

  body{
    min-height: 100vh;
    background: #F7FAFD;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Plus Jakarta Sans", sans-serif;
  }


`

