import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body * {
        color: rgb(32, 35, 41);
    }

    body::-webkit-scrollbar {
        width: 3px;
    }

    body::-webkit-scrollbar-track {
        background: linear-gradient(#2b86ff, blue);
    }

    body::-webkit-scrollbar-thumb {
        background-color: #2b86ff;
        border-radius: 20px;
    }
`;