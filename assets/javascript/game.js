



var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;



var computerGuess = computerGuess[Math.floor(Math.random() * computerGuess.length)];

document.onkeyup = function(event) {
	
	var userGuess = event.key;
	console.log(userGuess);
	



if(computerGuess===userGuess && guessesLeft >= 0){
	alert("Nailed it!");
	wins = wins + 1; 
	

	console.log(guessesLeft);
}
else if ( computerGuess!==userGuess && guessesLeft>=0) {
	alert("Noppers!");
	guessesLeft = guessesLeft -1 ;
	losses = losses +1;


	}
  

  var html =
	  	"<h3> Guess What Letter I am Thinking Of!</h3>" +
 		"<p> Wins: " + wins + "</p>" +
          "<p> Losses: " + losses + "</p>" +
          "<p> Guesses Left: " + guessesLeft + "</p>";
         
      
document.querySelector("#game").innerHTML = html;

}


         

   