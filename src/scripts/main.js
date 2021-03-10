import {getPosts} from "./data/DataManager.js";
import {PostList} from "./entries/PostList.js";
import {getPlaylistImages} from "./data/DataManager.js";
import {playlistImageList} from "./playlistImage/playlistImageList.js"
import {getSoundcloud} from "./data/DataManager.js";
import {soundcloudList} from "./soundcloud/soundcloudList.js";
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

const showSoundcloudPostList = () => {
    const postElement = document.querySelector(".soundcloud");
    getSoundcloud().then((allPosts) => {
        postElement.innerHTML = soundcloudList(allPosts);
    })
}

const startNSSJournal = () => {
showPostList();
showPlaylistImageList();
showSoundcloudPostList();
};
startNSSJournal();

