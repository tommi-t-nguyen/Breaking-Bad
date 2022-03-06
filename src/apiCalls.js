const urlPath = 'https://www.breakingbadapi.com/api/'

export const fetchAll = () = {
  return fetch(`${urlPath}characters`)
};
