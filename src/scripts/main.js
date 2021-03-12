import {getPosts, createPost, getLoggedInUser} from "./data/DataManager.js";
import {postList} from "./feed/PostList.js";
import {searchHeader} from "./nav/entrySearchBar.js";
import {PostEntry} from "./feed/PostEntry.js"
console.log("Welcome to the main module");
//! FIRST BOX LISTENERS
const post = document.querySelector(".firstBox");
post.addEventListener("mouseover", event => {
	if (event.target.id === "post"){
		console.log("Hello World")
	}
})
//? second 

//! SECOND BOX LISTENERS
//? send Button Listener
const sendButton = document.querySelector(".secondBox");
sendButton.addEventListener("mouseover", event => {
	if (event.target.id === "newPost__submit"){
		console.log("PLEASE")
	}
})

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
//     //!get a copy of the post collection
//     const epoch = Date.parse(`01/01/${year}`);
//     //!filter the data
//     const filteredData = usePostCollection().filter(singlePost => {
//       if (singlePost.timestamp >= epoch) {
//           return singlePost
//         }
//     })
//     const postElement = document.querySelector(".postList");
//     postElement.innerHTML = PostList(filteredData);
// }
//? mood sorter
//? form entry
//! Not working
//* My code
// formEntryJournalElement.addEventListener("click", event => {
//     event.preventDefault();
//     if (event.target.id === "newJournalEntrySubmit") {
//     //! collect the input values into an object to post to the DB
//       const title = document.querySelector("textarea[name='Concepts Covered']")
//       const timestamp = document.querySelector("input[name='journalDate']")
//       const mood = document.querySelector("select[name='mood']")
//       const description = document.querySelector("textarea[name='newJournalEntry']")
//       //! we have not created a user yet - for now, we will hard code `1`.
//       //! we can add the current time as well
//       const postObject = {
//             title: title.value,
//             text: description.value,
//             timestamp: timestamp.value,
//             mood: mood.value,
//             userId: 1
//       }
  
//     //! be sure to import from the DataManager
//         createPost(postObject)
//         .then(response => {
//             console.log("what is the new post response", response)
//             showPostList();
//         })
//     }
// })
//* giffygram
const applicationElement = document.querySelector(".secondBox");
applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  })
  //? important shit for thursday
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //! collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']")
      const mood = document.querySelector("input[name='postMood']")
      const description = document.querySelector("textarea[name='postDescription']").value
      //! we have not created a user yet - for now, we will hard code `1`.
      //! we can add the current time as well
      const postObject = {
            title: title.value,
            mood: mood.value,
            description: description,
            userId: getLoggedInUser,
            timestamp: Date.now()
      }
  
    //! be sure to import from the DataManager
        createPost(postObject)
        .then(response => {
            console.log("what is the new post response", response)
            showPostList();
        })
    }
})
const moodSelect = document.querySelector("newPost__input")
moodSelect.addEventListener("click", event => {
	if (event.target.id === "postMood"){
		console.log(moodSelect)
	}
})

//? search header html
const showSearchHeader = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("#searchbar");
    navElement.innerHTML = searchHeader();
}

const showPostList = () => {
    const postElement = document.querySelector(".journalEntries");
getPosts().then((allPosts) => {
    postElement.innerHTML = postList(allPosts);//! allPosts is not iterable? need help if I want to reverse journal entry flow
})
}

const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".secondBox");
    entryElement.innerHTML = PostEntry();
}


const startNSSJournal = () => {
showPostList();
showSearchHeader();
showPostEntry();
};

startNSSJournal();

