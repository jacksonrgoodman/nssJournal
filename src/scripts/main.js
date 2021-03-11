import {getPosts} from "./data/DataManager.js";
import {PostList} from "./entries/EntryList.js";
import {searchHeader} from "./nav/entrySearchBar.js";

console.log("Welcome to the main module");

//? send Button Listener
const sendButtonListener = document.querySelector("#newJournalEntrySubmit")
sendButtonListener.addEventListener("mouseover", event => {
    if (event.target.id === "newJournalEntrySubmit"){
    console.log("You moused over that there 'Send ?' button")
    }
})

//? search header html
const showSearchHeader = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("#searchbar");
	navElement.innerHTML = searchHeader();
}

//? mood sorter




const showPostList = () => {
    const postElement = document.querySelector(".journalEntries");
getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
})
}

const startNSSJournal = () => {
showPostList();
showSearchHeader();
};

startNSSJournal();

