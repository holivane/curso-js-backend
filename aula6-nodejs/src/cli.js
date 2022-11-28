import chalk from "chalk";
import fs from "fs";
import getFile from "./index.js";
import validatedList from "./valida.js";

const way = process.argv;

function printList(result, file) {
  console.log(
    chalk.yellow(`Lista de links do arquivo: ${file}`),
    validatedList(result)
  );
}

async function processText(req) {
  const way = req[2];

  try {
    fs.lstatSync(way);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(chalk.red("Arquivo ou diretório não existente"));
      return;
    }
  }

  if (fs.lstatSync(way).isFile()) {
    const result = await getFile(way);
    printList(result, way);
  } else if (fs.lstatSync(way).isDirectory()) {
    const files = await fs.promises.readdir(way);
    files.forEach(async (fileName) => {
      const list = await getFile(`${way}/${fileName}`);
      printList(list, fileName);
    });
    console.log(files);
  }
}

processText(way);
