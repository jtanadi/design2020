import css from "styled-jsx/css";

export default css`
  h2 {
    font-family: "Ogg-Medium", serif;
    font-weight: normal;
    font-size: 3.9rem;
    letter-spacing: -1px;
    line-height: 0.95;
    margin-top: 0;
    margin-bottom: 1.75rem;
  }

  .hero-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  #work-page-header-outer {
    width: 100%;
    margin-top: 3rem;
    align-items: center;
    color: black;
    background-color: white;
    border-bottom: 1px solid black;
    position: relative;
  }

  #work-page-header-container {
    width: 85%;
    max-width: 1600px;
    min-height: calc(100vh - 6rem + 1px);
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 50% auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
    position: relative;
  }

  .buttons-container {
    padding: 0;
    margin: 1rem auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .left-col,
  .right-col {
    padding: 1.75rem;
  }

  .left-col {
    grid-column-start: 1;
    grid-column-end: 2;
    border-right: 1px solid black;
  }

  .right-col {
    padding-left: 1.75rem;
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .spacer {
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: white;
    z-index: 50;
  }

  .bottom {
    bottom: calc(-0.5rem);
  }

  .left {
    left: calc(-0.5rem);
  }

  .middle {
    left: calc(50% - 0.5rem);
  }

  .right {
    right: calc(-0.5rem);
  }

  @media (min-width: 1601px) {
    h2 {
      font-size: 4.25rem;
      margin-bottom: 2.25rem;
      letter-spacing: -1px;
    }
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    #work-page-header-container {
      width: 90%;
    }
  }

  @media (max-width: 850px) {
    h2 {
      font-size: 3rem;
      margin-top: 1.75rem;
      margin-bottom: 1rem;
    }

    .bottom.middle {
      display: none;
    }

    #work-page-header-container {
      width: 75%;
      padding: 1.75rem;
    }

    .left-col,
    .right-col {
      padding: 0;
    }

    .left-col {
      grid-column-start: 1;
      grid-column-end: 3;
      border-right: none;
    }

    .right-col {
      padding-left: 0;
      padding-top: 0;
      grid-column-start: 1;
    }
  }

  @media (max-width: 550px) {
    #work-page-header-container {
      width: 90%;
    }
  }
`;
