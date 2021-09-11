import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    /*
    ====================================
        GLOBAL
    ====================================
    */

    /* === color Palette === */
    :root {
        --primary-color: #293783;
        --accent-color: #F79422;
        --text-color: black;
        --subtitle-color: #757575;
        --divider-color: #DDDDDD;
        --card-border-color: #9B9B9B;
        --success-color: #28a745;
        --error-color: #dc3545;
        --transition-time: 300ms;
        --free-space-size: calc(100vh - calc(300px));
    }

    html {
        font-size: 62.5%;
    }

    body, html {
        width: 100%;
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        color: black;
        font-family: 'Roboto', sans-serif;
    }

    input, textarea, *:focus {
        outline: none;
    }

    ul {
    list-style: none;
    }

    /* === Headers === */
    h1 {
        font-size: 3.6rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2.8rem;
        font-weight: 500;
    }

    h3 {
        font-size: 2.4rem;
        font-weight: 500;
    }

    h4 {
        font-size: 2rem;
        font-weight: 500;
    }

    h5 {
        font-size: 1.8rem;
        font-weight: 500;
    }

    /* === Paragraph === */
    p {
        font-size: 1.8rem;
        font-weight: 400;
    }

    .p-xlarge {
        font-size: 2.4rem;
        font-weight: 400;
    }

    .p-large {
        font-size: 2.2rem;
        font-weight: 400;
    }

    /* === label === */
    label {
        font-size: 2.2rem;
        font-weight: 300;
    }

    /* === anchor === */
    a {
        text-decoration: none;
        color: var(--text-color);
    }

    .clickable {
        transition: var(--transition-time);
    }

    .clickable:hover {
        filter: brightness(0.80);
    }

    /*
    ====================================
        Animations
    ====================================
    */
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export default GlobalStyles;