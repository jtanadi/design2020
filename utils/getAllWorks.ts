import fs from "fs";
import matter from "gray-matter";
import path from "path";
import worksPath from "./worksPath";

/*
   [
   {title
   image
   description
   }
   ]
 */

export default () => {
  const works = fs.readdirSync(worksPath);
  return works.map((work) => {
    const workDir = path.join(worksPath, work);

    const workFile = fs.readFileSync(path.join(workDir, "index.md"), "utf8");
    const {
      data: { title, description },
    } = matter(workFile);

    let image = "";
    try {
      image = fs.readFileSync(path.join(workDir, "0.jpg"), "base64");
    } catch (e) {}

    return {
      id: work,
      title,
      description,
      image,
    };
  });
};
