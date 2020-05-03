import fs from "fs";
import matter from "gray-matter";
import path from "path";

import worksPath from "./worksPath";
import getHeroImage from "./getHeroImage";

export default () => {
  const works = fs.readdirSync(worksPath);
  return works.map((work) => {
    const workDir = path.join(worksPath, work);
    let image = "";
    try {
      image = getHeroImage(workDir, "base64");
    } catch (e) {
      console.error(`No hero image for ${workDir}`);
    }

    const workFile = fs.readFileSync(path.join(workDir, "index.md"), "utf8");
    const { data } = matter(workFile);
    const { title, tags, short } = data;

    return {
      id: work,
      title,
      description: short || null,
      image,
      tags: tags.split(/,\s*/),
    };
  });
};