	var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

// //1
// 	console.log("=================== Number 1");
	
// 	for (var i = 0 ; i < (animals.length -1) ; i++){
	
// 		console.log(animals[i]);
// 	};

// //2
// 	console.log("=================== Number 2");

// 	for (var i = 0; i < animals.length ; i++){
// 		if (i % 2 === 0){
// 			console.log(animals[i]);
// 		}
// 		else{
// 			//Do nothing.
// 		}		
// 	};


//3
	// console.log("=================== Number 3");

	// for (var i = 0; i < animals.length ; i++){
	// 	var backwards = animals.reverse();
	// 	// var backwards = sorted.reverse();
	// 	console.log(backwards);


	// };
	var backup = animals.reverse();
	console.log(backup);