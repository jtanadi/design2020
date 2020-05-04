import fs from "fs";
import worksPath from "./worksPath";

export default () => {
  const works = fs.readdirSync(worksPath);
  return works.map((work) => {
    return {
      params: {
        id: work.replace(/\.md$/, ""),
      },
    };
  });
};
