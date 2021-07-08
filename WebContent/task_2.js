function calcSumArr(x1,x2){
	let sumArr=0;
	for (let e of x1){
		sumArr=sumArr+e
	}
	for (let e of x2){
		sumArr=sumArr+e
	};
	return sumArr;
};

const arr1=[2,3,-7,6,9,20];
const arr2=[5,6,-2];

console.log("The sum of two arrays = " + calcSumArr(arr1, arr2));
