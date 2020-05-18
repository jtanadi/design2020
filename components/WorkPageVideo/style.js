import css from "styled-jsx/css";

export default css`
  .video-wrapper {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  .video-wrapper:not(:last-child) {
    margin-bottom: 4rem;
  }

  video {
    width: 100%;
    max-height: 100%;
    transform: scale(1.005);
  }
`;
