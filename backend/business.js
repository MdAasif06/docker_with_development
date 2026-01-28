import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getData = async () => {
  try {
    const filePath = path.join(__dirname, "name.txt");
    const data = await fs.readFile(filePath, "utf-8");

    // console.log("file connect");
    const names = data.split(/\r?\n/);
    // console.log(names)
    //    const newName= names.forEach((name, index) => {
    //       if (name.trim() !== "") {
    //         console.log(`${index + 1}.${name.trim()}`);
    //       }
    //     });

    /**forEach new array kabhi return mhi krta hai */

    // const newNames = names.filter((name) => name.trim() !== "")
    //   .map((name, index) => `${index + 1}. ${name.trim()}`);
    return names;
  } catch (error) {
    console.error("Error reading file", err);
    return [];
  }
};
export default getData;
