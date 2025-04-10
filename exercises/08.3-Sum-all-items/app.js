function sumTheElements(theArray) {
	let total = 0;
	// Your code here

	/* Resolucion : Opcion 1
	theArray.forEach((item) => { 
		//console.log(a,b);
		total = total + item;
	});
	return total;
	*/

	/* Resolucion : Opcion 2
	return theArray.reduce((total, arg) => total + arg, 0);
	 */

	/* Resolucion : Opcion No recomendada
	*/
	for (idx in theArray){
		total += theArray[idx]; 
	}
	return total;
	

}

console.log(sumTheElements([2,13,34,5]))
// This should print 54