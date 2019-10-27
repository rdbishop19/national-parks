const dom = {
    renderParkToDom(htmlElement){
        // querySelect the parksContainer in index.html
        let parksContainer = document.querySelector('#parksContainer');
        // console.log(parksContainer)
        // appendChild to parksContainer
        parksContainer.appendChild(htmlElement);
    },
    renderPageTitle(){
        let pageTitleEl = document.createElement("h1")
        pageTitleEl.id = "title-national-parks"
        pageTitleEl.className = "center jumbotron";
        pageTitleEl.textContent = "National Parks Information"
        document.querySelector("#page-title").appendChild(pageTitleEl);
    }
}

export default dom