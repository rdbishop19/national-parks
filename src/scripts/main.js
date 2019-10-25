/*  Gets data about national parks from your json-server API 
    and displays the list of national parks on the DOM. */

// console.log('A journey of a thousand lines begins with one console.log...');

import api from "./api.js"
import dom from "./dom.js"
import component from "./components.js"


api.getParksLocationData().then((array) => {
    console.log("parks object", array)
    array.forEach((park) => {
        // pass each park object in the array to the createHtml function
        let parkEl = component.createParksHtml(park);
        // append card to DOM
        dom.renderParkToDom(parkEl);
    });
});