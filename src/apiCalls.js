const urlPath = 'https://www.breakingbadapi.com/api/characters'

export const fetchAll = () => {
  return fetch(`${urlPath}`)
  .then (response => response.json())
};
 export const fetchSingle = (id) => {
   return fetch(`${urlPath}/${id}`)
   .then (response => response.json())
 }
