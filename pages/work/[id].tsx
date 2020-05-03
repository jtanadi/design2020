import BarTop from "../../components/BarTop";
import BarBottomWork from "../../components/BarBottomWork";
import WorkHeader from "../../components/WorkHeader";
import WorkContent from "../../components/WorkContent";

import getAllWorks from "../../utils/getAllWorks";
import getWorkIds from "../../utils/getWorkIds";
import getWorkData from "../../utils/getWorkData";

export default function Work({ workData, content, prev, next }) {
  const { heroImg, title, description } = workData;

  return (
    <div>
      <BarTop leftLink={{ url: "/", name: "Home" }} workPage={true} />
      <WorkHeader heroImg={heroImg} title={title} description={description} />
      <WorkContent images={content} />
      <BarBottomWork leftLink={prev} rightLink={next} />
    </div>
  );
}

export async function getStaticPaths() {
  // [ {params: {id: nvmm}}, {params: {id: fmos}}]
  const paths = getWorkIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const allWorks = getAllWorks();
  const workData = getWorkData(id);

  const workIdx = allWorks.findIndex((work) => work.id === id);

  const prevWork = allWorks[workIdx - 1];
  const prev = prevWork
    ? { url: `/work/${prevWork.id}`, name: prevWork.title, icon: "◄" }
    : null;

  const nextWork = allWorks[workIdx + 1];
  const next = nextWork
    ? { url: `/work/${nextWork.id}`, name: nextWork.title, icon: "►" }
    : null;

  return {
    props: {
      workData: workData.data,
      content: workData.content,
      prev,
      next,
    },
  };
}
