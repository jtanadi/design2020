import fs from "fs";
import path from "path";

export default (projectTitle: string): string[] => {
  const imageDir = path.join(process.cwd(), "public", "images", projectTitle);
  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter((file) =>
    /\.(jpg$)|(jpeg$)|(png$)|(gif$)/.test(file)
  );

  return imageFiles.map((imgFile) =>
    path.join("/images", projectTitle, imgFile)
  );
};
