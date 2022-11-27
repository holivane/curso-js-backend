import fs from 'fs'
import chalk from 'chalk';

function handleError(error) {
  console.log(error);
  throw new Error(chalk.red(error.code, 'Não há este caminho'));
}

function getFile(filePath) {
  const encoding = 'utf-8';
  fs.readFile(filePath, encoding, (error, res) => {
    if (error) {
      handleError(error);
    }
    console.log(chalk.green(res));
  })
}

getFile('./arquivos/texto.md')