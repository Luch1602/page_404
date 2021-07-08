const person1={name:'Melisa',age:20};
const person2={name:'Linda',age:25};

function compareAge(p1, p2) {
	if (p1.age>p2.age){
		return 1;
	} else if (p1.age<p2.age){
		return -1;
	} else {
	 return 0;
	}
}

function compareAge2({age:age1}, {age:age2}) {
	if (age1>age2){
		return 1;
	} else if (age1>age2){
		return -1;
	} else {
	 return 0;
	}
}


const res = compareAge(person1, person2);
const s = res<0?'younger' : res>0? 'older':'the same age';
console.log(`${person1.name} ${s} ${person2.name}`);