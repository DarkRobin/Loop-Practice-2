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


// //3
// 	console.log("=================== Number 3");
// 		var backup = animals.reverse();
// 	for (var i = 0; i < backup.length ; i++){
// 		console.log(backup[i]);
// 	};


	//4
		console.log("=================== Number 4");

		for (var i = 0; i < animals.length ; i++){
			console.log(animals[i]);
			if (animals[i] === animals[1]){
				console.log(animals[1]);
			}
			if (animals[i] === animals[2]){
				console.log(animals[2]);
			}
			if (animals[i] === animals[3]){
				console.log(animals[3]);
			}
		};


	