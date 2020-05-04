import css from "styled-jsx/css"

export default css`
#work-content {
  width: 85%;
  max-width: 1600px;
  min-height: 20rem;
  margin: 0 auto 3rem auto;
  padding: 1.75rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

img {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}

img:not(:last-child) {
  margin-bottom: 1.75rem;
}

@media (max-width: 1200px) {
  #work-content {
    width: 90%;
  }
}

@media (max-width: 850px) {
  #work-content {
    width: 75%;
  }

  ul {
    grid-template-columns: 100%;
  }
}

@media (max-width: 550px) {
  #work-content {
    width: 90%;
  }
}
`
