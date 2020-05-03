import fs from "fs";
import matter from "gray-matter";
import path from "path";

import worksPath from "./worksPath";
import getHeroImage from "./getHeroImage";

export default (id: string) => {
  const workDir = path.join(worksPath, id);
  let heroImg = "";
  try {
    heroImg = getHeroImage(workDir, "base64");
  } catch (e) {
    console.error(`No hero image for ${workDir}`);
  }

  const data = fs.readFileSync(path.join(workDir, "index.md"), "utf8");
  const matterResult = matter(data);

  return {
    id,
    data: { heroImg, ...matterResult.data },
    content: matterResult.content,
  };
};
