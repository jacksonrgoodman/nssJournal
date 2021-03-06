export const getPosts = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
};
export const getPlaylistImages = () => {
    return fetch("http://localhost:8088/randomPlaylistArt")
    .then(response => response.json())
};