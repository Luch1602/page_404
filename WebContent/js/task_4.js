const x=prompt("x=");

function doubleFactorial (x){
	let dFactorial=1;
	if (x==0 & x==1){
	dFactorial=1
} else {
	while (x>1){
	dFactorial=dFactorial*x;
	x=x-2	
	};
} 
return dFactorial;
}

console.log("The doudle factorial = " + doubleFactorial(x));