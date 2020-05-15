import css from "styled-jsx/css";

export default css`
  .video-wrapper {
    overflow: hidden;
  }

  video {
    width: 100%;
    max-height: 100%;
    transform: scale(1.005);
  }

  video:not(:last-child) {
    margin-bottom: 1.75rem;
  }
`;
