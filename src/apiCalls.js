const urlPath = 'https://www.breakingbadapi.com/api/'

export const fetchAll = () => {
  return fetch(`${urlPath}characters`)
  .then(response => response.json())
};
 export const fetchSingle = (id) => {
   return fetch(`${urlPath}characters/${id}`)
   .then(response => response.json())
 }
