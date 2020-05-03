import fs from "fs";
import path from "path";

export default (workDir: string): string[] => {
  const files = fs.readdirSync(workDir);
  const imageFiles = files.filter((file) =>
    /\.(jpg$)|(jpeg$)|(png$)|(gif$)/.test(file)
  );

  return imageFiles.map((imgFile) =>
    fs.readFileSync(path.join(workDir, imgFile), "base64")
  );
};
