import { createGlobalStyle } from 'styled-components';
import background from './images/background.jpg';
import phone from './images/frame-iphone.png';

const GlobalStyle = createGlobalStyle`

html, body {
    height: 100vh;
    width: 100vw;
}

body{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    background: url(${background});
    background-size: cover;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

main{
    position: relative;
    height: 100vh;
}

.phone{
    position: absolute;
    height: 627px;
    width: 311px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${phone}) no-repeat;
}

.home {
    width: 50px;
    position: fixed;
    left: 42%;
    bottom: 0;
    margin-bottom: 17px;
    height: 50px;
    background-color: transparent;
    border-radius: 100%;
}

.home:hover{
border: 0.5px solid black;
}
`;

export default GlobalStyle;
