import chalk from "chalk";
import fs from 'fs';
import getFile from "./index.js";

const way = process.argv;

function printList (result) {
  console.log(chalk.yellow('Lista de links: '), result);
}

async function processText(req) {
  const way = req[2];

  if (fs.lstatSync(way).isFile()) {
    const result = await getFile(way);
    printList(result);
  } else if (fs.lstatSync(way).isDirectory()) {
    const files = await fs.promises.readdir(way)
    files.forEach(async (fileName) => {
      const list = await getFile(`${way}/${fileName}`);
      printList(list);
    })
    console.log(files);
  }
}

processText(way);
 