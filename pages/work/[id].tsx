import fetch from "isomorphic-unfetch";
import { api } from "../../utils/endpoints";

import BarTop from "../../components/BarTop";
import BarBottomWork from "../../components/BarBottomWork";
import WorkPageHeader from "../../components/WorkPageHeader";
import WorkPageContent from "../../components/WorkPageContent";

export default function Work({ workData, content, prev, next }) {
  return (
    <div>
      <BarTop leftLink={{ url: "/", name: "Home" }} workPage={true} />
      <WorkPageHeader headerData={workData} />
      {content.length ? <WorkPageContent content={content} /> : null}
      <BarBottomWork leftLink={prev} rightLink={next} />
    </div>
  );
}

export async function getStaticPaths() {
  const pathsResponse = await fetch(`${api}/ids`);
  const paths = await pathsResponse.json();
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  const worksResponse = await fetch(`${api}/works`);
  const allWorks = await worksResponse.json();

  const workResponse = await fetch(`${api}/work/${id}`);
  const workData = await workResponse.json();

  const workIdx = allWorks.findIndex((work) => work.id === id);

  const prevWork = allWorks[workIdx - 1] || allWorks[allWorks.length - 1];
  const prev = prevWork
    ? { url: `/work/${prevWork.id}`, name: prevWork.title, icon: "◄" }
    : null;

  const nextWork = allWorks[workIdx + 1] || allWorks[0];
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
