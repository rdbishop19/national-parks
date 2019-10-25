import api from './api.js';

const components = {
	createParksHtml(park) {
		// console.log("createParksHtml runs successfully")

		// ES6 destructuring to assign variabled based on 'park' object's properties
		const { latitude, longitude, name, state, visited } = park;
		// console.log(latitude, longitude, name, state, visited) // works!

        const parkEl = document.createElement('article');
		if (visited) {
			// console.log('visited')
			parkEl.className = 'visited center';
		} else {
			parkEl.className = 'unvisited center';
		}
		// console.log("parkEl", parkEl)
		const headerEl = document.createElement('h3');
		headerEl.textContent = name;
		// console.log("headerEl", headerEl)

		const parkLocationStateEl = document.createElement('p');
		parkLocationStateEl.textContent = state;
		// console.log(parkLocationStateEl)

		const weatherSummaryHeader = document.createElement('p');
		const weatherSummaryEl = document.createElement('ul');
		const currentWeather = document.createElement('li');
		const dailyWeather = document.createElement('li');
        const hourlyWeather = document.createElement('li');
        weatherSummaryEl.appendChild(currentWeather)
        weatherSummaryEl.appendChild(dailyWeather)
        weatherSummaryEl.appendChild(hourlyWeather)

		api.getWeatherData(park)
			.then((weatherObj) => {
				currentWeather.innerHTML = `<strong>Currently:</strong> ${weatherObj.currently.summary}`;
				dailyWeather.innerHTML = `<strong>Daily:</strong> ${weatherObj.daily.summary}`;
				hourlyWeather.innerHTML = `<strong>Hourly:</strong> ${weatherObj.hourly.summary}`;
                parkEl.appendChild(weatherSummaryHeader)
                parkEl.appendChild(weatherSummaryEl)
			})

		parkEl.appendChild(headerEl);
        parkEl.appendChild(parkLocationStateEl);

		// console.log(parkEl);

		return parkEl;
	}
};

export default components;
