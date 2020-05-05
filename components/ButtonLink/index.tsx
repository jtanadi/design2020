import style from "./style";

export interface LinkInterface {
  id?: number;
  name: string;
  url: string;
  icon?: string;
}

export default function ButtonLink(props: {
  link: LinkInterface;
  target?: string;
}) {
  const { link, target } = props;
  return (
    <>
      <div className="button-container">
        <a href={link.url} target={target ? target : ""}>
          <button>{link.icon ? link.icon : link.name}</button>
        </a>
      </div>

      <style jsx>{style}</style>
    </>
  );
}
