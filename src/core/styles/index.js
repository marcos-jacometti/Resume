import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        background-color: #000500;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            background: #121214;
            width: 5px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 5px;
            border: 3px solid #473bf0;
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