
// export const postEntry = () => {
//     return `
//     <form class="form" action="Daily Journal">
//         <article>
//             <label for="SournalDate">Date of Entry:</label><br />
//             <input type="date" name="journalDate" id="journalDate">
//         </article>
//         <article>
//             <label for="conceptArea">Concepts Covered:</label>
//             <textarea name="Concepts Covered" id="conceptsCovered" cols="48" rows="1"></textarea>
//         </article>
//         <article>
//             <label for="moodArea">Mood:</label>
//             <select name="mood" id="mood">
//                 <option value="Empty"></option>
//                 <option value="Happy">Happy</option>
//                 <option value="Tired">Tired</option>
//                 <option value="Frustrated">Frustrated</option>
//                 <option value="Confused">Confused</option>
//             </select>
//         </article>
//         <article>
//             <label for="newJournalEntry"><strong>Text Entry:</strong></label>
//             <textarea name="newJournalEntry" id="newJournalEntry" cols="48" rows="10" placeholder="✧*｡what's been goin' on?｡*✧"></textarea>
//         </article>
//         <article>
//             <button id="newJournalEntrySubmit">Send ?</button>
//         </article>
//     </form>
//     `
// }
export const PostEntry = () => {
    return `
    <form class="newPost">
        <div>
            <input value="" name="postTitle" class="newPost__input" type="text" placeholder="Concepts Covered" />
        </div>
        <div>
            <select value="post" name="postMood" class="newPost__input">
                <option value="Empty"></option>
                <option value="Happy">Happy</option>
                <option value="Tired">Tired</option>
                <option value="Frustrated">Frustrated</option>
                <option value="Confused">Confused</option>
            </select>
        </div>

        <textarea name="postDescription" class="newPost__input newPost__description" placeholder="✧*｡what's been goin' on?｡*✧"></textarea>

        <button id="newPost__submit">Send?</button>
    </form>
    `
}























