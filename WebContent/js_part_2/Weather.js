axios = require('axios')
const weatherUrl1 = 'https://goweather.herokuapp.com/weather/'
class Weather{
/**
 * Describe attributes: temperature, wind, date, forecast
 */
   constructor(){
	this.temperature = ''
	this.wind = ''
	this.date = Date.now()
	this.forecast = [];
   }
   async setWeather(cityName){
	  await axios.get(weatherUrl1 + cityName).then((response)=>{
		this.temperature = response.data.temperature;
		this.wind = response.data.wind;
		//console.log(response.data);
	}).catch((error) => {return error.message})
   }
   async setForecast(cityName){
	  await axios.get(weatherUrl1 + cityName).then((response)=>{
		this.forecast = response.data.forecast;
	}).catch((error) => {return error.message})
}
}

module.exports = {Weather}