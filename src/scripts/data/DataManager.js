// export const getPosts = () => {
//     return fetch("http://localhost:8088/entries")
//     .then(response => response.json())
// };
let entryCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread [...] operator makes this quick work
  return [...entryCollection];
}
export const getPosts = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(Response => {
      entryCollection = Response
      return Response;
    })
}