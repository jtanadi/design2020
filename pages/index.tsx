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

export default function Index(props: IndexPropsInterface) {
  return (
    <div>
      <BarTop />
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
