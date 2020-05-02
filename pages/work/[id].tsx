import BarTop from "../../components/BarTop";
import BarBottom from "../../components/BarBottom";
import WorkHeader from "../../components/WorkHeader";

import getWorkIds from "../../utils/getWorkIds";
import getWorkData from "../../utils/getWorkData";

export default function Work({ workData, content }) {
  const { heroImg, title, description, studio } = workData;

  return (
    <div>
      <BarTop />
      <WorkHeader
        heroImg={heroImg}
        title={title}
        description={description}
        studio={studio}
      />
      <p>{content}</p>
    </div>
  );
}

export async function getStaticPaths() {
  // [ {params: {id: nvmm}}, {params: {id: fmos}}]
  const paths = getWorkIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const workData = getWorkData(id);
  return { props: { workData: workData.data, content: workData.content } };
}
