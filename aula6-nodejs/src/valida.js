import chalk from "chalk";

function getLink(arrLinks) {
    return arrLinks.map((link) => Object.values(link).join());
}

async function checkStatus(listURLs) {
  const arrStatus = await Promise
  .all(
    listURLs.map(async (url) => {
      try {
        const res = await fetch(url);
        return res.status;
      } catch (error){
        return scapeError(error)
      }
    })
  );
  return arrStatus;
}

function scapeError(error) {
  if (error.cause.code === 'ENOTFOUND') {
    return 'Link não encontrado'
  }
  return 'Ops! Ocorreu algum erro'
}

export default async function validatedList(linkList) {
  if (typeof linkList == "object") {
    const links = getLink(linkList);
    const status = await checkStatus(links);
  
    return linkList.map((obj, index) => ({
      ...obj,
      status: status[index]
    }));
  }
  return linkList;
}
