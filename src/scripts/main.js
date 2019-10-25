console.log("A journey of a thousand lines begins with one console.log...")
/* 
    Build an application that gets data about national parks from your json-server API 
    and displays the list of national parks on the DOM. 
    Each national park should be formatted in HTML like below:
*/
const createParksHtml = (park) => {
    // console.log("createParksHtml runs successfully")
    
    // ES6 destructuring to assign variabled based on 'park' object's properties
    const { latitude, longitude, name, state, visited } = park
    // console.log(latitude, longitude, name, state, visited) // works!
    
    /* 
        <article>
            <h3>Park Name</h3>
            <p>State the park in located in</p>
        </article>
    */
    let parkEl = document.createElement("article")
    // console.log("parkEl", parkEl)
    let headerEl = document.createElement("h3")
    headerEl.textContent = name
    // console.log("headerEl", headerEl)

    let parkLocationStateEl = document.createElement("p")
    parkLocationStateEl.textContent = state
    // console.log(parkLocationStateEl)

    parkEl.appendChild(headerEl);
    parkEl.appendChild(parkLocationStateEl);
    // console.log(parkEl);

    return parkEl

}

const renderParkToDom = (htmlElement) => {
    // querySelect the parksContainer in index.html
    let parksContainer = document.querySelector("#parksContainer")
    console.log(parksContainer)
    // appendChild to parksContainer
    parksContainer.appendChild(htmlElement)
}

const parksBaseUrl = "http://localhost:8088/parks"
// console.log(parksBaseUrl)
fetch(parksBaseUrl).then(r=>r.json())
    .then(array => {
        // console.log("parks object", array)
        array.forEach(park => {
            // console.log(park)
            // pass each park object in the array to the next function
            let parkEl = createParksHtml(park)
            // console.log(parkEl)
            // append card to DOM
            renderParkToDom(parkEl)
        } 
        )
    }
    )