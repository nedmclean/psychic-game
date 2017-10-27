



var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var totalGuesses = 10;
var guessesSoFar = [];


//had trouble pushing the values of the user guesses into the gussesSoFar array defined above.  

//also couldn't make the reset function work properly.  




var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

document.onkeyup = function(event) {


var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	
	var userGuess = event.key;
	console.log(userGuess);

	guessesSoFar = [userGuess];




if(computerGuess===userGuess && guessesLeft >= 1){
	
	wins = wins + 1; 
	alert("You're spooky psychic!");
	var guessesSoFar = [];


}
else if ( computerGuess!==userGuess && guessesLeft>1) {
	guessesLeft = guessesLeft -1 ;
	losses = losses +1;
	var guessesSoFar = [];


	}
  

  var html =
	  	"<h3> Guess What Letter I am Thinking Of!</h3>" +
 		"<p> Wins: " + wins + "</p>" +
          "<p> Losses: " + losses + "</p>" +
          "<p> Guesses Left: " + guessesLeft + "</p>"; +
          "<p> Guesses So Far: " + guessesSoFar + "/p>";

          console.log(guessesSoFar);

         
      
document.querySelector("#game").innerHTML = html;


}



         

   