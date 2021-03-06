import {getPosts} from "./data/DataManager.js";
import {PostList} from "./entries/PostList.js";

console.log("Welcome to the main module");



const showPostList = () => {
const postElement = document.querySelector(".journalEntries");
getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
})
}
/*
This function performs one, specific task.

1. Can you explain what that task is?
2. Are you defining the function here or invoking it?
*/
const startGiffyGram = () => {
showPostList();
};
// Are you defining the function here or invoking it?
startGiffyGram();

const songs = [
	{
        title:"MAAD WORLD",
	    artist:"toastydigital,{Kanye West & Kendrick Lamar}",
        audioFile:"05 MAAD WORLD.mp3",
        albumArt:"/playlist/GKTF cover.png",
        year:"2021",
		timeLength:144
    },
    {
        title:"Can't Tell Me Nothing'",
	    artist:"toastydigital,{Kanye West 2049}",
        audioFile:"08 CAN'T TELL ME NOTHIN.mp3",
        albumArt:"/playlist/Kanye 2049.png",
        year:"2020",
		timeLength:126
    },
];

const playlistAsHTML = (songObj) => {
	return `<div>
		<p>__${songObj.title} --${songObj.artist}, ${songObj.year}</p>
		<audio class="playlistPlayer" src="/src/audio/${songObj.audioFile}" controls preload="auto" />
    </div>`
};

const songListContainer = document.querySelector(".musicBox")
let allSongsAsHTML = ""
for (const song of songs) {
    allSongsAsHTML += playlistAsHTML(song)
}
songListContainer.innerHTML += allSongsAsHTML;