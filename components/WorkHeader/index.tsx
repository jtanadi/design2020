import style from "./style";

type Prop = {
  heroImg: string;
  title: string;
  description: string;
  studio?: string;
};

export default function WorkHeader(props: Prop) {
  const { heroImg, title, description, studio } = props;
  return (
    <>
      <div className="work-outer-container">
        <div className="work-content-container">
          <div className="left-col">
            <img
              className="hero-img"
              src={`data:image/*;base64,${heroImg}`}
              alt={`Hero image for ${title}`}
            />
          </div>
          <div className="right-col">
            <h2>{title}</h2>
            <p>{description}</p>
            {studio ? <p>{studio}</p> : null}
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
