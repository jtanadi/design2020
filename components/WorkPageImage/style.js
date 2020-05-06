import css from "styled-jsx/css";

export default css`
  img {
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  img:not(:last-child) {
    margin-bottom: 1.75rem;
  }

  img.detailable {
    cursor: pointer;
  }

  img.detailable:hover {
    box-shadow: 0 0 8px black;
    transition: all ease 0.25s;
  }
`;
