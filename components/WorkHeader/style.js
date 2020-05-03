import css from "styled-jsx/css"

export default css`
h2 {
  font-size: 2.5rem;
  letter-spacing: -2px;
  line-height: 0.9;
  margin-top: 0;
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

@media (max-width: 1200px) {
  h2 {
    font-size: 2rem;
    letter-spacing: -1px;
  }
  .work-content-container {
    width: 90%;
  }
}

@media (min-width: 1601px) {
  h2 {
    font-size: 3rem;
    letter-spacing: -7.5px;
  }
}

@media (min-width: 1801px) {
  h1 {
    font-size: 10rem;
    letter-spacing: -8px;
  }
}

@media (max-width: 850px) {
  h1 {
    font-size: 5rem;
    letter-spacing: -4px;
    margin-bottom: 2rem;
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
  h1 {
    font-size: 4rem;
    letter-spacing: -3px;
  }

  .work-content-container {
    width: 90%;
  }
}

@media (max-width: 400px) {
  h1 {
    font-size: 3.25rem;
    letter-spacing: -2px;
    margin-bottom: 1rem;
  }
}
`