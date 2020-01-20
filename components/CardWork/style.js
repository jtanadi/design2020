import css from "styled-jsx/css"

export default css`
h2 {
  font-size: 1.75rem;
  margin: -.25rem 0 0.5rem 0;
  font-family: NeueHaasUnicaW1G-UltraLight;
}

.description {
  margin-top: 0;
  font-size: 1rem;
}

ul {
  padding-left: 0;
}

img {
  width: 100%;
  display: inline-block;
  object-fit: cover;
}


.card-container {
  flex: 1;
  width: 100%;
  padding: 1.75rem;
  position: relative;
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  grid-template-rows: 2.75rem auto;
  grid-column-gap: 3%;
  align-items: start;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
}

.card-container:nth-child(even) {
  border-left: none;
}

.spacer {
  width: 1rem;
  height: 1rem;
  position: absolute;
  background-color: white;
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

.button-container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 1100px) {
  .card-container {
    grid-template-columns: 43.5% 53.5%;
  }
}

@media (max-width: 820px) {
  .card-container {
    grid-template-columns: 48.5% 48.5%;
  }
}

@media (max-width: 450px) {
  .card-container {
    display: block;
  }

  .tag-container {
    display: none;
  }

  .description {
    margin-top: 0.75rem;
  }
}
`
