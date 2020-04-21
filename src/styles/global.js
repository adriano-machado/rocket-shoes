import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

}

body {


    background: linear-gradient(-90deg, rgba(113,89,193,1) 0%, rgba(54,54,102,1) 100%);
      -webkit-font-smoothing:antialiased;


    &::before {
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      background: url(${background}) no-repeat center -60px/101vw;
      z-index: -5;

      @media (max-width: 1200px) {
        background: url(${background}) no-repeat center top;
      }

    }


}

body,input,button {
    font:14px Roboto, sans-serif;

}

#root {
    max-width: 1020px;
    margin: auto;
    padding: 0 20px 50px;
}

button {
    cursor: pointer;
}
`;
