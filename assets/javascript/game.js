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
  	displayGuess.innerText = "0 0 0 0 0 0";

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
// EventListen for keystroke?

// // Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
//     	document.onkeyup = function(event) {

// //         // Captures the key press, converts it to lowercase, and saves it to a variable.
// 	        var letter = String.fromCharCode(event.keyCode).toLowerCase();

// 	//         // If the letter is h, run the following functions/methods.
// 	        function honk(){
// 	        	if (letter === "h") {
// 	          	alert("honk");
// 	        	}
// 	    	}
// 		};

	// indexOf() returns the position of the first occurance of a specified value in a string
	// currentWord.indexOf(userGuess)
	//userGuess = event.key.toUpperCase(); ~~retrives the value of the key pressed (K, 1, return, etc..) and sets it to var userGuess

      // if (options.indexOf(userGuess) < 0) {
      //   return;
      // }  ~~~ Checks to see if userGuess is inluded in available options (sanity check for letter of alphabet
      // ~~~~~~ and can be used to check of userGuess is in the currentWord)



// 	Wrong Guess
//	Lower guess counter
//	Update Trail image
//	Update Trail log

// 	Correct Guess
// 	Update word with guessed letter
//	Remove letter from guessing pool

// 	Game Over
//	Win= score++
//	Lose= display Game Over
// 	New Game; User choice or autoplay?
}


