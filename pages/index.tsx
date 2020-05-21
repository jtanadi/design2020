import fetch from "isomorphic-unfetch";
import useSWR from "swr";

import { api } from "../utils/endpoints";
import { domain } from "../utils/endpoints";
import { jsonFetcher } from "../utils/fetchers";

import BarTop from "../components/BarTop";
import BarBottom from "../components/BarBottom";
import Bio from "../components/Bio";
import Loading from "../components/Loading";
import WorkContainer from "../components/WorkContainer";

const resumeLink = {
  url: `${domain}/data/JesenTanadi_Resume.pdf`,
  name: "Resume",
};
const emailLink = { url: "mailto:mail@jesentanadi.com", name: "Email" };

export default function Index({ bio }) {
  const { data, error } = useSWR(`${api}/works`, jsonFetcher);
  if (error) return <div>Error loading. Please try again!</div>;
  if (!data) return <Loading />;

  return (
    <div>
      <BarTop leftLink={resumeLink} rightLink={emailLink} />
      <Bio bio={bio} />
      <WorkContainer works={data} />
      <BarBottom />
    </div>
  );
}

export async function getStaticProps() {
  const bioResponse = await fetch(`${api}/bio`);
  const bio = await bioResponse.json();

  return { props: { bio } };
}
