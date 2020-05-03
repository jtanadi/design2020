import style from "./style";

export default ({ images }) => {
  return (
    <>
      <div id="work-content">
        {images.map((image: string, i: number) => (
          <img key={`img-${i}`} src={`data:image/*;base64,${image}`} />
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
};
