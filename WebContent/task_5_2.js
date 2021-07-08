const arrey =[{name:'Melisa',age:30},{name:'Linda',age:25},{name:'Paul',age:15},{name:'Nike',age:27}]

function compareAge(p1, p2) {
	if (p1.age>p2.age){
		return 1;
	} else if (p1.age<p2.age){
		return -1;
	} else {
	 return 0;
	}
}

let str = "";
let order = arrey.sort(compareAge);
order.map((e)=>{str = str+" "+e.name+ "("+e.age+") \n"});

order.reverse();
str= str+"\n---------------------\n";
order.map((e)=>{str = str+" "+e.name+ "("+e.age+") \n"});
console.log(str );