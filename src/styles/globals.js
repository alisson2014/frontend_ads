import { createGlobalStyle } from "styled-components";

export const ResetCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body * {
        color: whitesmoke;
    }

    html, body {
        background: rgb(39, 43, 51);
    }
`;