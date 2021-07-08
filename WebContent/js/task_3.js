let a=[true, true, false, false, true, false, true];
function countTrue(a){
	let count=0;
for (let i in a) {
	if (a[i]) {count++}
}
return count;
} 

console.log("Count="+countTrue(a));