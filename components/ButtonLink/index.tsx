import style from "./style"

export interface LinkInterface {
  id: number
  url: string
  name: string
}

export default function ButtonLink(props: { link: LinkInterface, target?: string }) {
  const { link, target } = props
  return (
    <>
      <div className="button-container">
        <a href={ link.url } target={ target ? target : "_blank" }>
          <button>
            { link.name }
          </button>
        </a>
      </div>

      <style jsx>{ style }</style>
    </>
  )
}
