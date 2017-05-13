// Hangman Game JS
function game() {
	
	var score = 0;
	var guessCounter = 5;
	var alphabet = "abcdefghijklmnopqrstuvwxyz"; 

	var	displayScore = document.getElementById("display-score");
	var displayCounter = document.getElementById("display-counter");
	var displayMessage = document.getElementById("message");
	var displayCurrentWord = document.getElementById("current-word");
	var displayGuess = document.getElementById("display-guess");


	// Gameboard reset
    displayScore.innerHTML = score;
    displayCounter.innerHTML = guessCounter;
    displayMessage.innerHTML = "Let the Journey Begin"+"<br>"+"Press a letter";
  	displayCurrentWord.innerText = "0 0 0 0 0";
  	displayGuess.innerText = "0 0 0 0 0";

	// Status message displayed in #trail
	var message = {
		win: "Success! Welcome to Tucson...Tucson?? Damnit!",
		lose: "You have died of dysentery",
		badGuessOne: "Andy broke his arm trying to get the microphone to work",
		badGuessTwo: "The axel broke while Shane was using the wagon as a rock stage",
		badGuessThree: "Lost your oxen while on break, looks like you're on foot",
		badGuessFour: "Only one more incorrect guess, oh and Andy broke his other arm",
	};

	// Dictionary array for puzzle words.
	var dictionary = [
		"rattlesnake", 
		"cowboy", 
		"spur", 
		"chuckwagon", 
		"shootout",
		"buffalo",
		"pioneer"];

	//	Choose a word
	var currentWord = dictionary[Math.floor(Math.random() * dictionary.length)];
	displayCurrentWord.innerText = currentWord;
	// Basic Play function?
	// Begin play when user picks a letter 

	// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
    document.onkeyup = function(event) {

		// Captures the key press, converts it to lowercase, and saves it to a variable.
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			// userGuess validation to check if it is a letter.
        	if (alphabet.indexOf(userGuess) < 0) {
          		
          		alert("Please pick a letter");

        	} else {
	        	// userGuess is not included in the current word
	        	if (currentWord.indexOf(userGuess) < 0) {
	        		
	        		displayGuess.innerText = userGuess;
					guessCounter--;
					//  check gameOver Loss
					if (guessCounter === 0){
						// display Game Over
						alert("Game Over");
						return;
					}
				} 
				// correct guess but already guessed
				// else if (){
				// // 	Increase score++
				// // 	Update word with guessed letter
				// //	Remove letter from guessing pool??
				// //  check for gameOver Win 
				// //		if letters guessed = current word

				// // correct guess, not already guessed
				// } else{

				// }
        	}

        	// Update displays
        	displayScore.innerHTML = score;
        	displayCounter.innerHTML = guessCounter;
			
			//	Update trial image and message display
			switch (guessCounter){
				case 4:
					displayMessage.innerHTML = message.badGuessOne;
					//change to image 2
					break;
				case 3:
					displayMessage.innerHTML = message.badGuessTwo;
					//change to image 3
					break;
				case 2:
					displayMessage.innerHTML = message.badGuessThree;
					//change to image 4
					break;
				case 1:
					displayMessage.innerHTML = message.badGuessFour;
					//change to image 5
			}
			

				// 	Game Over  function/method?
				//	Win= score++
				//	Lose= display Game Over
				// 	New Game; User choice or autoplay?
    // End onkeyup()
	};
// End game()
}

