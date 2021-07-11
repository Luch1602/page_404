class Country {
  /**
   *Describe attributes: name, citys[]
   */

  constructor(name){
	this.name = name
	this.citys = [];
}
async addCity(city){
await	city.setWeather().then( ()=>{
		 this.citys.push(city);
	}).catch((error) => {console.log(error)})
	
}
removeCity(cityName){
	const ind = this.citys.findIndex((el)=> {el.name===cityName} );
	let temp1 =this.citys.slice(0, ind-1);
	let temp2 =this.citys.slice(ind, this.citys.length);
	this.citys = temp1.concat(temp2);
}
compareTemperature (a1, a2) {
	if(a1.getTemperature()>a2.getTemperature()) return 1;
	else if(a1.getTemperature()<a2.getTemperature()) return -1;
	return 0;
}
 async getWeatherCountry(){
	let order = this.citys.sort(this.compareTemperature).reverse();
	//order.map((el)=> {console.log(el.name, el.getWeather())})
	order.map((el)=> {console.log(el.name, el.getWeather())})
  }
}
module.exports = {Country}