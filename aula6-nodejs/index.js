import fs from "fs";
import chalk from "chalk";

function handleError(error) {
  console.log(error);
  throw new Error(chalk.red(error.code, "Não há este caminho"));
}

// function getFile(filePath) {
//   const encoding = 'utf-8';
//   fs.readFile(filePath, encoding, (error, res) => {
//     if (error) {
//       handleError(error);
//     }
//     console.log(chalk.green(res));
//   })
// }

// Funçōes com then//
// function getFile(filePath) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(filePath, encoding)
//     .then((res) => {
//       console.log(chalk.green(res));
//     })
//     .catch(handleError);
// }

async function getFile(filePath) {
  try {
    const encoding = 'utf-8';
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(chalk.green(text));
  } catch (error){
    handleError(error)
  } 
}

getFile("./arquivos/texto.md");
getFile("./arquivos");
