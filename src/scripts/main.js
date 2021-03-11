import {getPosts} from "./data/DataManager.js";
import {entryList} from "./entries/EntryList.js";
import {searchHeader} from "./nav/entrySearchBar.js";
import {entryEntry} from "./entries/entryEntry.js"
console.log("Welcome to the main module");

//? send Button Listener
// const sendButtonListener = document.querySelector("#newJournalEntrySubmit")
// sendButtonListener.addEventListener("mouseover", event => {
//     if (event.target.id === "newJournalEntrySubmit"){
//     console.log("You moused over that there 'Send ?' button")
//     }
// })


//? year sorter
//! Doesnt work
// yearSorterElement.addEventListener("change", event => {
//     if (event.target.id === "yearSelection") {
//         const yearAsNumber = parseInt(event.target.value)
        
//         console.log(`User wants to see posts since ${yearAsNumber}`)
//         showFilteredPosts(yearAsNumber);
//     }
// })
// const showFilteredPosts = (year) => {
//     //get a copy of the post collection
//     const epoch = Date.parse(`01/01/${year}`);
//     //filter the data
//     const filteredData = usePostCollection().filter(singlePost => {
//       if (singlePost.timestamp >= epoch) {
//           return singlePost
//         }
//     })
//     const postElement = document.querySelector(".postList");
//     postElement.innerHTML = PostList(filteredData);
// }
//? mood sorter




//? search header html
const showSearchHeader = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("#searchbar");
    navElement.innerHTML = searchHeader();
}

const showEntryList = () => {
    const postElement = document.querySelector(".journalEntries");
getPosts().then((allPosts) => {
    postElement.innerHTML = entryList(allPosts);//! allPosts is not iterable? need help if I want to reverse journal entry flow
})
}

const showEntryEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".secondBox");
    entryElement.innerHTML = entryEntry();
}


const startNSSJournal = () => {
showEntryList();
showSearchHeader();
showEntryEntry();
};

startNSSJournal();

