import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgray;
    }
}

body {
    font-family: 'Big Shoulders Display', cursive;
    width: 100%;
}

h2 {
    font-size: 3rem;
    font-family: 'Squada One', cursive;
    font-weight: lighter;
}

h3 {
    font-size: 2rem;
    color: #333;
    padding: 1.5rem 0rem;
}

p {
    font-size: 1.5rem;
    line-height: 200%;
    padding-bottom: 0.5rem;
    color: #696969;
}
`;

export default GlobalStyles;
