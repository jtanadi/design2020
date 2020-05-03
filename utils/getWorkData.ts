import fs from "fs";
import matter from "gray-matter";
import path from "path";

import worksPath from "./worksPath";
import getHeroImage from "./getHeroImage";
import getImages from "./getImages";

export default (id: string) => {
  const workDir = path.join(worksPath, id);
  let heroImg = "";
  try {
    heroImg = getHeroImage(workDir, "base64");
  } catch (e) {
    console.error(`No hero image for ${workDir}`);
  }

  const workFile = fs.readFileSync(path.join(workDir, "index.md"), "utf8");
  const { data, content } = matter(workFile);

  return {
    id,
    data: { heroImg, ...data, description: content },
    content: getImages(workDir),
  };
};
