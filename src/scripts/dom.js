const dom = {
    renderParkToDom(htmlElement){
        // querySelect the parksContainer in index.html
        let parksContainer = document.querySelector('#parksContainer');
        // console.log(parksContainer)
        // appendChild to parksContainer
        parksContainer.appendChild(htmlElement);
    }
}

export default dom