import css from "styled-jsx/css";

export default css`
  img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  img.detailable {
    cursor: pointer;
  }

  img.detailable:hover {
    box-shadow: 0 0 8px black;
    transition: all ease 0.25s;
  }

  @media (min-width: 851px) {
    img:not(:last-child) {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 850px) {
    img:not(:last-child) {
      margin-bottom: 1.75rem;
    }
  }
`;
