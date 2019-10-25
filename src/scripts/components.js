const components = {
    createParksHtml(park){
        // console.log("createParksHtml runs successfully")
    
        // ES6 destructuring to assign variabled based on 'park' object's properties
        const { latitude, longitude, name, state, visited } = park;
        // console.log(latitude, longitude, name, state, visited) // works!
    
        /* 
            For each of the national parks, use the latitude and longitude 
            to get the weather in that area using this API: https://darksky.net/dev. 
            From the data coming back from the Dark Sky API, 
            you are going to use summary listed under currently, hourly and daily. 
            Change the html so it looks like this:
         */
    
        /* 
            <article>
                <h3>Park Name</h3>
                <p>State the park</p>
                <p>Weather:</p>
                <ul>
                <li>Currently: Summary from currently in API Data</li>
                <li>Today: Summary from hourly in API Data</li>
                <li>Week: Summary from daily in API Data</li>
                </ul>
            </article>
         */
    
        let parkEl = document.createElement('article');
        if (visited){
            // console.log('visited')
            parkEl.classList = "visited"
        }
        else {
            parkEl.classList = "unvisited"
        }
        // console.log("parkEl", parkEl)
        let headerEl = document.createElement('h3');
        headerEl.textContent = name;
        // console.log("headerEl", headerEl)
    
        let parkLocationStateEl = document.createElement('p');
        parkLocationStateEl.textContent = state;
        // console.log(parkLocationStateEl)
    
        parkEl.appendChild(headerEl);
        parkEl.appendChild(parkLocationStateEl);
        // console.log(parkEl);
    
        return parkEl;
    }
}

export default components