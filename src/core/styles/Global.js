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
            border: 3px solid #950101k;
        }
    }

    header, main, footer {
        width: 100%;
    }

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;

        p {
            font-size: 0.8vw;
        }
    }
`;