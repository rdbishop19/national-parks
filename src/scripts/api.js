// import apiKey from "./apiKey.js"
// import dom from "./dom.js"

const api = {
	getWeatherData(object) {
		const darkSkyBaseUrl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
		return fetch(`${darkSkyBaseUrl}${darkSkyApiKey}/${object.latitude},${object.longitude}`).then(r => r.json());
    },
    getParksLocationData(){
        const parksBaseUrl = 'http://localhost:8088/parks';
        // console.log(parksBaseUrl)
        return fetch(parksBaseUrl).then((r) => r.json())
    }
};

export default api
