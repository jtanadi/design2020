import getAllWorks from "../utils/getAllWorks";

import BarTop from "../components/BarTop";
import BarBottom from "../components/BarBottom";
import Bio from "../components/Bio";
import { WorkInterface } from "../components/WorkCard";
import WorkContainer from "../components/WorkContainer";

interface IndexPropsInterface {
  bio: string;
  works: WorkInterface[];
}

const resumeLink = { url: "/docs/JesenTanadi_Resume.pdf", name: "Resume" };
const emailLink = { url: "mailto:mail@jesentanadi.com", name: "Email" };

export default function Index(props: IndexPropsInterface) {
  return (
    <div>
      <BarTop leftLink={resumeLink} rightLink={emailLink} />
      <Bio bio={props.bio} />
      <WorkContainer works={props.works} />
      <BarBottom />
    </div>
  );
}

export async function getStaticProps() {
  const bio = require("../data/bio.md").default;
  const works = getAllWorks();
  return { props: { bio, works } };
}
