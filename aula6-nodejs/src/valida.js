function getLink (arrLinks) {
  if (typeof arrLinks == 'object'){
    return arrLinks.map((link) => Object.values(link).join())
  }
  return `- ${arrLinks}`;
 }

export default function validatedList(linkList) {
  return getLink(linkList);
  // const links = await extractLink(linkList);
  // const status = await checkStatus(links)

  // return linkList.map((obj, index) => ({
  //   ...obj, 
  //   status: status[index]
  // }))
}