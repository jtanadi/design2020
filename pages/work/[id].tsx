import fetch from "isomorphic-unfetch";
import useSWR from "swr";

import { api } from "../../utils/endpoints";
import { jsonFetcher } from "../../utils/fetchers";

import BarTop from "../../components/BarTop";
import BarBottomWork from "../../components/BarBottomWork";
import Loading from "../../components/Loading";
import WorkPageHeader from "../../components/WorkPageHeader";
import WorkPageContent from "../../components/WorkPageContent";

export default function Work({ id, prev, next }) {
  const { data, error } = useSWR(`${api}/work/${id}`, jsonFetcher);

  if (error) return <div>Something's not right. Please try again!</div>;
  if (!data) return <Loading />;

  const { data: workData, content } = data;

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

  const workIdx = allWorks.findIndex((work) => work.id === id);

  const prevWork = allWorks[workIdx - 1] || allWorks[allWorks.length - 1];
  const prev = prevWork
    ? { url: `/work/${prevWork.id}`, name: prevWork.title || "", icon: "◄" }
    : null;

  const nextWork = allWorks[workIdx + 1] || allWorks[0];
  const next = nextWork
    ? { url: `/work/${nextWork.id}`, name: nextWork.title || "", icon: "►" }
    : null;

  return {
    props: {
      id,
      prev,
      next,
    },
  };
}
