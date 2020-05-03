import css from "styled-jsx/css"

export default css`
h2 {
  font-size: 2.5rem;
  letter-spacing: -2px;
  line-height: 0.9;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "NeueHaasUnicaW1G-Bold", "Helvetica Neue", "Helvetica", sans-serif;
}

.hero-img {
  object-fit: cover;
  max-width: 100%;
  height: 100%;
}

.work-outer-container {
  width: 100%;
  margin-top: 3rem;
  align-items: center;
  color: black;
  background-color: white;
  border-bottom: 1px solid black;
  position: relative;
}

.work-content-container {
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

.left-col, .right-col {
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

@media (max-width: 1200px) {
  h2 {
    font-size: 2.25rem;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  }

  .work-content-container {
    width: 90%;
  }
}

@media (max-width: 850px) {
  h2 {
    font-size: 2.125rem;
    margin-top: 1.75rem;
    margin-bottom: 1rem;
  }

  .bottom.middle {
    display: none;
  }

  .work-content-container {
    width: 75%;
    padding: 1.75rem;
  }

  .left-col, .right-col {
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
  .work-content-container {
    width: 90%;
  }
}
`
