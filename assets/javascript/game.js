// Hangman Game JS
function game() {
	
	var score = 0;
	var guessCounter = 5;
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var guesses = " "; 

	var	displayScore = document.getElementById("display-score");
	var displayCounter = document.getElementById("display-counter");
	var displayMessage = document.getElementById("message");
	var displayCurrentWord = document.getElementById("current-word");
	var displayWordHolder = document.getElementById("current-word");
	var displayGuess = document.getElementById("display-guess");


	// Gameboard reset
    displayScore.innerHTML = score;
    displayCounter.innerHTML = guessCounter;
    displayMessage.innerHTML = "CASH ME IN OREGON...HOW BOUT THAT"+"<br>"+"Press a letter";
  	displayCurrentWord.innerText = "0 0 0 0 0";
  	displayGuess.innerHTML = guesses;
  	document.getElementById("img-wagon").src = "assets/images/wagon-320.png";

	// Status message displayed in #trail
	var message = {
		win: "Success! Welcome to Tucson...Tucson?? Damnit!",
		lose: "You have died of dysentery <br> Dont worry you can play again",
		badGuessOne: "Andy broke his arm trying to get the microphone to work",
		badGuessTwo: "The axel broke while Shane was using the wagon as a rock stage",
		badGuessThree: "Lost your oxen while on break",
		badGuessFour: "Only one more incorrect guess <br> and Joan took an Array to the shoulder",
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

	//	Set display to blank word spaces
	displayCurrentWord.innerHTML = "";
	
	//	Computer chooses a word
	var currentWord = dictionary[Math.floor(Math.random() * dictionary.length)];
	
	//  Creates  list items for each letter of the word picked by the computer
	function wordHolder(currentWord) {
		for (var i = 0; i < currentWord.length; i++){
			var placeHolder = document.createElement("LI");
			placeHolder.setAttribute("id", currentWord[i]);
			placeHolder.appendChild(document.createTextNode(0));
			displayCurrentWord.appendChild(placeHolder);
		}
	}	

	wordHolder(currentWord);

	// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
    document.onkeyup = function(event) {

		// Captures the key press, converts it to lowercase, and saves it to a variable.
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			// userGuess validation to check if it is a letter.
        	if (alphabet.indexOf(userGuess) < 0) {
          		
          		alert("Please pick a letter");

        	} else {
				var guessIndex = currentWord.indexOf(userGuess)
	        	// userGuess is not included in the current word
	        	if (guessIndex < 0) {
	        		
	        		guesses = guesses + " " + userGuess;
					guessCounter--;
        			displayCounter.innerHTML = guessCounter;
					//  check for Game Over
					if (guessCounter === 0){
						// display Game Over
						displayMessage.innerHTML = message.lose;
						document.getElementById("img-wagon").src = "assets/images/wagon-320-5.png";
						return;
					}
				// userGuess is included in the current word
				} else {
					//  Established which letter of the current word was guessed by the user
					var letter = currentWord.indexOf(userGuess);
					var pickedLetter = currentWord[letter];
					//	Displays correctly picked letter
					document.getElementById(pickedLetter).innerHTML = pickedLetter;
					
					//	How to display second letter of same type?
				 	// 	Increase score++
				 	//	Remove letter from guessing pool??
				 	//  Check for gameOver Win 
					//		if letters guessed = current word		
				}
				// correct guess but already guessed...will have to create else if above
        	}

        	// Update displays
        	displayScore.innerHTML = score;
        	displayGuess.innerHTML = guesses;
			
			//	Update trial image and message display
			switch (guessCounter){
				case 4:
					displayMessage.innerHTML = message.badGuessOne;
					document.getElementById("img-wagon").src = "assets/images/wagon-320-1.png";
					break;
				case 3:
					displayMessage.innerHTML = message.badGuessTwo;
					document.getElementById("img-wagon").src = "assets/images/wagon-320-2.png";
					break;
				case 2:
					displayMessage.innerHTML = message.badGuessThree;
					document.getElementById("img-wagon").src = "assets/images/wagon-320-3.png";
					break;
				case 1:
					displayMessage.innerHTML = message.badGuessFour;
					document.getElementById("img-wagon").src = "assets/images/wagon-320-4.png";
			}
    // End onkeyup()
	};

	// gameOver function???	
	//	Win= score++
	//	Lose= display Game Over
	// 	New Game; User choice or autoplay?

// End game()
}

