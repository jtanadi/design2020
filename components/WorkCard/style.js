import css from "styled-jsx/css";

export default css`
  h2 {
    font-family: "Ogg-Medium", serif;
    font-weight: normal;
    font-size: 1.85rem;
    margin: -0.25rem 0 1.5rem 0;
    line-height: 1;
  }

  ul {
    padding-left: 0;
  }

  img {
    width: 100%;
    display: inline-block;
    object-fit: scale-down;
  }

  .card-link {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    position: relative;
  }

  .card-link a {
    text-decoration: none;
    color: black;
  }

  .card-link a:active {
    color: black;
  }

  .card-link a:visited {
    color: black;
  }

  .card-link:nth-child(even) {
    border-left: none;
  }

  .card-link:nth-last-child(1),
  .card-link:nth-last-child(2) {
    border-bottom: none;
  }

  .card-container {
    flex: 1;
    width: 100%;
    height: 100%;
    min-height: 23rem;
    padding: 1.75rem;
    position: relative;
    display: grid;
    grid-template-columns: 48.5% 48.5%;
    grid-template-rows: auto auto;
    grid-column-gap: 3%;
    align-items: start;
    align-content: start;
    background-color: white;
  }

  .card-container:hover {
    transition: all ease 0.25s;
    box-shadow: 0 0 8px black;
    z-index: 99;
  }

  .card-container.empty {
    z-index: 0;
  }

  .card-container.empty:hover {
    box-shadow: none;
  }

  .spacer {
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: white;
    z-index: 50;
  }

  .top-left {
    left: -0.5rem;
    top: -0.5rem;
  }

  .top-right {
    right: -0.5rem;
    top: -0.5rem;
  }

  .bottom-left {
    left: -0.5rem;
    bottom: -0.5rem;
  }

  .bottom-right {
    right: -0.5rem;
    bottom: -0.5rem;
  }

  .left-container {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .right-container {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .card-container h2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  @media (max-width: 1200px) {
    .card-container {
      grid-template-columns: 43.5% 53.5%;
    }
  }

  @media (max-width: 850px) {
    .card-container {
      grid-template-columns: 48.5% 48.5%;
    }

    .card-link:nth-child(even) {
      border-left: 1px solid black;
    }

    .card-container.empty {
      display: none;
    }

    .card-link:nth-last-child(2) {
      border-bottom: 1px solid black;
    }
  }

  @media (max-width: 550px) {
    .card-container {
      display: block;
    }

    .tag-container {
      display: none;
    }

    .description {
      margin-top: 0.75rem;
    }

    .card-link:last-child {
      border-bottom: 0;
    }

    .right-container {
      margin-top: 1.5rem;
    }
  }
`;
