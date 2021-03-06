import {getPosts} from "./data/DataManager.js";
import {PostList} from "./entries/PostList.js";
import {getPlaylistImages} from "./data/DataManager.js";
import {playlistImageList} from "./playlistImage/Post List.js"

console.log("Welcome to the main module");



const showPostList = () => {
const postElement = document.querySelector(".journalEntries");
getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
})
}

const showPlaylistImageList = () => {
    const postElement = document.querySelector(".playlist");
    getPlaylistImages().then((allPosts)=> {
        postElement.innerHTML = playlistImageList(allPosts);
    })
}

const startNSSJournal = () => {
showPostList();
showPlaylistImageList();
};
startNSSJournal();

