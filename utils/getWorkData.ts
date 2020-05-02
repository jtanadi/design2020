import fs from "fs";
import matter from "gray-matter";
import path from "path";

import worksPath from "./worksPath";

export default (id: string) => {
  const workDir = path.join(worksPath, id);
  const data = fs.readFileSync(path.join(workDir, "index.md"), "utf8");
  const matterResult = matter(data);

  let heroImg = "";
  try {
    const heroPath = path.join(workDir, "0.jpg");
    heroImg = fs.readFileSync(heroPath, "base64");
  } catch (e) {
    console.error(`No hero image for ${id}`);
  }

  return {
    id,
    data: { heroImg, ...matterResult.data },
    content: matterResult.content,
  };
};
