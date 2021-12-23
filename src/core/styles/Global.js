import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: roboto, sans-serif;
    }

    body {
        background-color: #1A090D;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            background: #121214;
            width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            border: 3px solid #5c5470;
        }
    }

    header, main, footer {
        width: 100%;
    }
`;