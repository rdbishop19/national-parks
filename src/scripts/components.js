import api from "./api.js"

const components = {
    createParksHtml(park){
        // console.log("createParksHtml runs successfully")
    
        // ES6 destructuring to assign variabled based on 'park' object's properties
        const { latitude, longitude, name, state, visited } = park;
        // console.log(latitude, longitude, name, state, visited) // works!
        
        // api.getWeatherData(park).then(weatherObj => {
        //     let currently = weatherObj.currently.summary
        //     let daily = weatherObj.daily.summary
        //     let hourly = weatherObj.hourly.summary
        // });
        // console.log("weather summary", currently, daily, hourly)
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