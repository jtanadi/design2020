import style from "./style";

export default function BarSpacers(props: {
  showMiddle?: boolean;
  location: string;
  middleHeight?: string;
}) {
  const { showMiddle, location, middleHeight } = props;

  if (location !== "top" && location !== "bottom") {
    throw new Error("Only two options for location");
  }

  return (
    <>
      <div className={"spacer-container"}>
        <div className={`spacer ${location} full-height left`} />

        {showMiddle === false ? null : (
          <div
            className={`spacer ${location} ${
              middleHeight || "full"
            }-height middle`}
          />
        )}

        <div className={`spacer ${location} full-height right`} />
      </div>

      <style jsx>{style}</style>
    </>
  );
}
