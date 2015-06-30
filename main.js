$(document).ready(function(){
	


	var letterCapitalize = function(string) {
		var words = string.split(' ');
		var wordsArray = [];
		var newString;

		for (i = 0; i < words.length; i++) {
			var firstLetter = words[i][0].toUpperCase();
			var restOfLetters = words[i].slice(1).toLowerCase();
			wordsArray.push(firstLetter + restOfLetters);
		}

		newString = wordsArray.join(' ');
			console.log(newString);
	}






	var wordCount = function(string) {
		var words = string.split(' ');
		console.log(words.length);

	}
});

