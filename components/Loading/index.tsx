import style from "./style";

export default function Loading() {
  return (
    <>
      <div id="loading-cover">
        <img src="/images/spinner.gif" alt="spinner" />
      </div>
      <style jsx>{style}</style>
    </>
  );
}
