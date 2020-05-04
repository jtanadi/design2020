import fs from "fs";
import matter from "gray-matter";
import path from "path";

import worksPath from "./worksPath";
import getHeroImage from "./getHeroImage";

export default () => {
  const works = fs.readdirSync(worksPath);
  return works.map((work) => {
    const projectTitle = work.replace(/\.md$/, "");
    const workFilePath = path.join(worksPath, work);

    let image = "";
    try {
      image = getHeroImage(projectTitle);
    } catch (e) {
      console.error(`No hero image for ${work}`);
    }

    const workFile = fs.readFileSync(workFilePath, "utf8");
    const { data } = matter(workFile);
    const { title, tags, short } = data;

    return {
      id: projectTitle,
      title,
      description: short || null,
      image,
      tags: tags.split(/,\s*/),
    };
  });
};
