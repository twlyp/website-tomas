import fs from "node:fs";
import path from "node:path";

const folderPath = "/Users/lb/dev/website-tomas/static/assets/photo";

async function readDirectories(filePath) {
  try {
    const files = await fs.promises.readdir(filePath, { withFileTypes: true });
    return files.filter((file) => file.isDirectory());
  } catch (error) {
    console.error("Error reading folder:", error);
    return;
  }
}

async function readImagePaths(filePath) {
  try {
    const files = await fs.promises.readdir(filePath, { withFileTypes: true });
    const images = files.filter(
      (file) => file.isFile() && file.name.endsWith(".jpg")
    );
    const relativePath = filePath.split("/static/")[1];
    return images.map((image) => path.join(relativePath, image.name));
  } catch (error) {
    console.error("Error reading folder:", error);
    return;
  }
}

async function readJsonData(filePath) {
  try {
    const rawJsonData = await fs.promises.readFile(
      path.join(filePath, "data.json"),
      "utf8"
    );
    try {
      return JSON.parse(rawJsonData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return;
  }
}

async function scanFolder(folderPath) {
  const output = [];

  const files = await readDirectories(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file.name);
    const jsonData = await readJsonData(filePath);
    const imagePaths = await readImagePaths(filePath);
    output.push({name: file.name, ...jsonData, images: imagePaths});
  }

  console.log('output', output);
  
}

scanFolder(folderPath);
