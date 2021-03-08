import { playlistImage } from "./Post.js";

export const playlistImageList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += playlistImage(postObject)
		}
		return postHTML;
	
}

// const random = Math.floor(Math.random() * playlistImage.length);
// console.log(random, months[random]);