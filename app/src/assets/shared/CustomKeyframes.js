import { keyframes } from "styled-components";
import { darkAccents, darkShades, lightAccent, lightShades, mainBrand } from "./GeneralCSSValues";

export const colorTransition = keyframes`
    0% {
        color: ${lightShades};
    }

    25% {
        color: ${lightAccent};
    }

    50% {
        color: ${lightShades};
    }

    75% {
        color: ${mainBrand};
    }

    100%{
        color: ${lightShades};
    }
`

export const pulse = keyframes`
0% {
    transform: scale(1);
}
16% {
    transform: scale(1.1);
}
25% {
    transform: scale(1);
}
48% {
    transform: scale(1.2);
}
75% {
    transform: scale(1);
}
100% {
    transform: scale(1.1);
}
`