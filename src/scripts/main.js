import {getPosts} from "./data/DataManager.js";
import {PostList} from "./entries/EntryList.js";

console.log("Welcome to the main module");

//? send Button Listener
const sendButtonListener = document.querySelector("#newJournalEntrySubmit")
sendButtonListener.addEventListener("mouseover", event => {
    if (event.target.id === "newJournalEntrySubmit"){
    console.log("You moused over that there 'Send ?' button")
    }
})

//?



const showPostList = () => {
    const postElement = document.querySelector(".journalEntries");
getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
})
}

const startNSSJournal = () => {
showPostList();
};

startNSSJournal();

