export const searchHeader = () => {
    //? HTML to be returned to firstbox component
    return `
        <div class="search__item">
            <p>Posts since</p>
            <select id="yearSelection">
                <option>2021</option>
                <option>2020</option>
            </select>
        </div>
    `
}