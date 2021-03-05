const fullPlaylist = [
	{
        title:"MAAD WORLD",
	    artist:"toastydigital, {Kanye West & Kendrick Lamar}",
        audioFile:"05 MAAD WORLD.mp3",
        albumArt:"GKTF cover.png",
        year:"2021",
		length:"144"
    }
];

const playlistAsHTML = (songObj) => {
	`<div>
		<h2>${fullPlaylist.title}</h2>
		<ul>
            <li>artist: ${fullPlaylist.artist}</li>
            <li>year released: ${fullPlaylist.year}</li>
            <li>length: ${fullPlaylist.length}</li>
        </ul>
		<audio class="playlistPlayer" src="/audio/${fullPlaylist.audioFile}" controls preload="auto">
    </div>`
};

const songListContainer = document.querySelector(".musicBox")
let allSongsAsHTML = ""
for (const song of fullPlaylist) {
    allSongsAsHTML += playlistAsHTML(song)
}
songListContainer.innerHTML += allSongsAsHTML


// export const songList = () => {
//     for (const song of fullPlaylist) {
//         const songDataAsHTML = playlistAsHTML(song)
//         songListContainer.innerHTML += songDataAsHTML();
//     };
// };

// songList()