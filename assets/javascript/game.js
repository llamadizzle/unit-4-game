
$(document).ready(function(){

	// Creates a function to generate the random number
	var winningNmbr = 0;
	var greenCrystalNmbr = 0;
	var redCrystalNmbr = 0;
	var yellowCrystalNmbr = 0;
	var purpleCrystalNmbr = 0;

	function winningNmbrGenerator() {
		winningNmbr = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
		console.log("The Winning number is: " + winningNmbr); 

		$("#winningNmbr").html(winningNmbr);
	}

	// Assigns a random number to each crystal
   	function randomCrystalValuesGenerator() {
   		
		greenCrystalNmbr = Math.floor(Math.random() * 12) + 1; 
		console.log("The Green Crystal's value is: " + greenCrystalNmbr); 

		redCrystalNmbr = Math.floor(Math.random() * 12) + 1; 
		console.log("The Red Crystal's value is: " + redCrystalNmbr); 

		yellowCrystalNmbr = Math.floor(Math.random() * 12) + 1; 
		console.log("The Yellow Crystal's value is: " + yellowCrystalNmbr); 

		purpleCrystalNmbr = Math.floor(Math.random() * 12) + 1; 
		console.log("The Purple Crystal's value is: " + purpleCrystalNmbr); 
   	}

		winningNmbrGenerator();
		randomCrystalValuesGenerator();
	
	// Creates a variable for score keeping
		
	var score = 0;
	var wins = 0;
	var losses = 0;


		//Red Crystal
		$("#redCrystal").on("click", function() {
			score = score + redCrystalNmbr;
			console.log(score); 
			$("#score").html(score);

				if (score === winningNmbr) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("You Win!");
					console.log("You Win!");
					winningNmbrGenerator();
					randomCrystalValuesGenerator();
					score = 0;
					$("#score").html(score);
				}

				if (score > winningNmbr) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("You Lose!");
					console.log("You Lose!");
					winningNmbrGenerator();
					randomCrystalValuesGenerator();
					score = 0;
					$("#score").html(score);
				}
		});

		//Purple Crystal
		$("#purpleCrystal").on("click", function() {
				score = score + purpleCrystalNmbr;
				console.log(score); 
				$("#score").html(score);
	
				if (score === winningNmbr) {
						wins = wins + 1;
						$("#wins").html("Wins: " + wins);
						$("#message").html("You Win");
						console.log("You Win");
						winningNmbrGenerator();
						randomCrystalValuesGenerator();
						score = 0;
						$("#score").html(score);
					}
	
				if (score > winningNmbr) {
						losses = losses + 1;
						$("#losses").html("Losses: " + losses);
						$("#message").html("You Lose!");
						console.log("You Lose!");
						winningNmbrGenerator();
						randomCrystalValuesGenerator();
						score = 0;
						$("#score").html(score);
					}
			});

		// Yellow Crystal
		
		$("#yellowCrystal").on("click", function() {
			score = score + yellowCrystalNmbr;
			console.log(score); 
			$("#score").html(score);

				if (score === winningNmbr) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("You Win!");
					console.log("You Win!");
					winningNmbrGenerator();
					randomCrystalValuesGenerator();
					score = 0;
					$("#score").html(score);
				}

				if (score > winningNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("You Lose!");
					console.log("You Lose!");
					winningNmbrGenerator();
					randomCrystalValuesGenerator();
					score = 0;
					$("#score").html(score);
				}
		});

	//    Green Crystal
		$("#greenCrystal").on("click", function() {
			score = score + greenCrystalNmbr;
			console.log(score); 
			$("#score").html(score);


				if (score === winningNmbr) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("You Win!");
					console.log("You Win!");
					winningNmbrGenerator();
					randomCrystalValuesGenerator();
					score = 0;
					$("#score").html(score);
				}

				if (score > winningNmbr) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("You Lose!");
					console.log("You Lose!");
					winningNmbrGenerator();
					randomCrystalValuesGenerator();
					s = 0;
					$("#score").html(score);
				}
		});

		// Play again function
		$("#playAgain").on("click", function() {
			wins = 0;
			losses = 0;
			score = 0;
			$("#wins").html("Wins: " + 0);
			$("#losses").html("Losses: " + 0);
			$("#score").html(score);
			$("#message").html();
			winningNmbrGenerator();
			randomCrystalValuesGenerator();
		});


});