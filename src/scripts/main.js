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