const {City} = require('./City');
const {Capital} = require('./Capital');
const {Country} = require('./Country');

let city1 = new City('Kharkiv');
let city2 = new City('Kyiv');
let city3 = new City('Lviv');

let city4 = new City('Ternopil');
let city5 = new City('Uzhhorod');
let city6 = new City('Lutsk');
let city7 = new City('Odessa');
let city8 = new City('Donetsk');
let city9 = new City('Lugansk');
let city10 = new City('Simferopol');
let city11 = new City('Sevastopol');
let city12 = new City('Cherkasy');
let country = new Country('Ukraine')
async function init() {
await  country.addCity(city1);
await country.addCity(city2);
await country.addCity(city3);

await country.addCity(city4);
await country.addCity(city5);
await country.addCity(city6);

await country.addCity(city7);
await country.addCity(city8);
await country.addCity(city9);
await country.addCity(city10);
await country.addCity(city11);
await country.addCity(city12);

} 

init().then(()=>{ console.log (country.name+" :"); country.getWeatherCountry();}); 
//let capital = new Capital('Kyiv');
//capital.setAirport('Boryspil')
//capital.setWeather().then(() => {console.log(city2)}).catch((error) => {console.log(error)})