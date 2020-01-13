import ReactMarkdown from "react-markdown"

import style from "./style"
import ArrowButton from "../ArrowButton"

export default function Bio(props: { bio: string }) {
  const { bio } = props
  return (
    <>
      <div className="bio-container">
        <div className="bio-content">
          <h1>Hello World!</h1>

          <ReactMarkdown
            className="bio-markdown"
            source={ bio }
          />
        </div>
      </div>
      <div className="divider">
        <ArrowButton />
      </div>
      <style jsx>{ style }</style>
    </>
  )
}