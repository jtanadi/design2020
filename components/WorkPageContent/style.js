import css from "styled-jsx/css";

export default css`
  #work-page-content {
    width: 85%;
    max-width: 1600px;
    min-height: 20rem;
    margin: 0 auto 3rem auto;
    padding: 1.75rem;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }

  #content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    #work-page-content {
      width: 90%;
    }
  }

  @media (max-width: 850px) {
    #work-page-content {
      width: 75%;
    }

    ul {
      grid-template-columns: 100%;
    }
  }

  @media (max-width: 550px) {
    #work-page-content {
      width: 90%;
    }
  }
`;
