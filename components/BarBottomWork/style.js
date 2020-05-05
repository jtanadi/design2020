import css from "styled-jsx/css"

export default css`
#bar-bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: white;
  border-top: 1px solid black;
  color: black;
  height: 3rem;
}

#buttons-container {
  width: 85%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
}

@media (max-width: 1200px) {
  #buttons-container {
    width: 90%;
  }
}

@media (max-width: 850px) {
  #buttons-container {
    width: 75%;
  }
}

@media (max-width: 550px) {
  #buttons-container {
    width: 90%;
  }
}
`
