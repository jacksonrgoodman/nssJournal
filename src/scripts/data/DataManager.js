export const getPosts = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
};