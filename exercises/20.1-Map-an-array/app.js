let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map((item) => {
	// Add your code here and return the new value
	return (item * 9/5) + 32 ; // formula
});

console.log(arrayOfFahrenheitValues);
