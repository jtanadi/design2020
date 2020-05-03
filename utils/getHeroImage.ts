import fs from "fs";
import path from "path";

// Hero image defaults to first image
export const getHeroImagePath = (workDirPath: string): string => {
  const files = fs.readdirSync(workDirPath);
  const heroImg = files.find((file) =>
    /\.(jpg$)|(jpeg$)|(png$)|(gif$)/.test(file)
  );

  return path.join(workDirPath, heroImg);
};

export default (workDirPath: string, encoding: string): string => {
  const heroImagePath = getHeroImagePath(workDirPath);
  return fs.readFileSync(heroImagePath, encoding);
};
