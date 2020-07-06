import styled from "styled-components";

export const HomePageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 80px;
    overflow-x: hidden;

    h1.company {
      font-size: 4.2rem;
      font-family: "Comfortaa", cursive;
      color: black;
      text-shadow: 0px 3px 0px #b2a98f, 0px 5px 5px rgba(0, 0, 0, 0.15),
        0px 10px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1);
      margin: 0;
      padding-top: 50px;
    }

    h2.lead {
      font-family: "Caveat", cursive;
      font-size: 2rem;
      color: black;
      margin: 0;
      padding-bottom: 50px;
    }

    .directory-menu {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .tracking-in-expand {
      animation: tracking-in-expand 3s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    .text-focus-in {
      animation: text-focus-in 2.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }

    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes text-focus-in {
      0% {
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        filter: blur(0);
        opacity: 1;
      }
    }
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;
