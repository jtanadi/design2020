import fs from "fs";
import matter from "gray-matter";
import path from "path";

import worksPath from "./worksPath";
import getHeroImage from "./getHeroImage";
import getImages from "./getImages";

export default (id: string) => {
  const fileName = `${id}.md`;
  const workFilePath = path.join(worksPath, fileName);
  let heroImg = "";
  try {
    heroImg = getHeroImage(id);
  } catch (e) {
    console.error(`No hero image for ${id}`);
  }

  const workFile = fs.readFileSync(workFilePath, "utf8");
  const { data, content } = matter(workFile);

  return {
    id,
    data: { heroImg, ...data, description: content },
    content: getImages(id),
  };
};
