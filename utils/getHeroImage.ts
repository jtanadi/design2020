import fs from "fs";
import path from "path";

// Hero image defaults to first image
export default (projectTitle: string): string => {
  const imageDir = path.join(process.cwd(), "public", "images", projectTitle);

  const files = fs.readdirSync(imageDir);
  const heroImg = files.find((file) =>
    /\.(jpg$)|(jpeg$)|(png$)|(gif$)/.test(file)
  );

  return path.join("/images", projectTitle, heroImg);
};
