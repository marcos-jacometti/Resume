import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
        font-family: 'Josefin Sans', cursive;
        background-color: #000;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            background: #121214;
            width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            border: 3px solid #ff0000;
        }
    }

    header, main, footer {
        width: 100%;
    }
`;