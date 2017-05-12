// Hangman Game JS
function game() {
	
	alert("this is a test");
	var score = 0;
	var guessCounter = 5; 

	var	displayScore = document.getElementById("display-score");
	var displayCounter = document.getElementById("display-counter");
	var displayMessage = document.getElementById("message");

	// Gameboard reset
    displayScore.innerHTML = score;
    displayCounter.innerHTML = guessCounter;
    displayMessage.innerText = "The Journey Begins!";
  	
	
	// Dictionary array of puzzle words.
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
// Basic Play
// EventListen for keystroke?


// 	Wrong Guess
//	Lower guess counter
//	Update Trail image
//	Update Trail log

// 	Correct Guess
// 	Update word with guessed letter
//	Remove letter from guessing pool
}

alert("Outside function test");




// 	Game Over
//	Win= score++
//	Lose= display Game Over
// 	New Game; User choice or autoplay?

