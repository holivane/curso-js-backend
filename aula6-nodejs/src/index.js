import fs from "fs";
import chalk from "chalk";

function handleError(error) {
  console.log(error);
  throw new Error(chalk.red(error.code, "Não há este caminho"));
}

function extractLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const parts = [...texto.matchAll(regex)];
  const result = parts.map(part => ({[part[1]]: part[2]}));
  return result;
}

async function getFile(filePath) {
  try {
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(extractLinks(text));
  } catch (error){
    handleError(error)
  } 
}

export default getFile;


