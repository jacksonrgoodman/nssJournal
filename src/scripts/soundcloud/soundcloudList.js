import { soundcloudPost } from "./soundlcoud.js";

export const soundcloudList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += soundcloudPost(postObject)
		}
		return postHTML;
}