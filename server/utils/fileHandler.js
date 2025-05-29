// utils/fileHandler.js

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// __dirname workaround in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function saveFile(directory, filename, buffer) {
  const fullDir = path.resolve(__dirname, "../media", directory);
  const filePath = path.join(fullDir, filename);

  // Create directory if it doesn't exist
  fs.mkdirSync(fullDir, { recursive: true });

  // Write the file
  fs.writeFileSync(filePath, buffer);

  // Return relative path
  return path.relative(path.resolve(__dirname, ".."), filePath);
}