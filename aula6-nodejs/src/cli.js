import chalk from "chalk";
import getFile from "./index.js";

const way = process.argv;

async function processText(way) {
  const result = await getFile(way[2]);
  console.log(chalk.yellow('Lista de links: '), result);
}

processText(way);
