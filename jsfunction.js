////////////////////WEEK 3: Activity 1/////////////////////
//Because of function hoisting, this works in JavaScript (Proved)
print_word("word");

function print_word(word) 
{
	if(typeof(word) == typeof("a string") && !word.includes(" ")){
		console.log(word);
	} else {
		console.log("Not a word");
	}
}

//Writing a function which is assigned to a variable. Calling it before it is assigned and proving that this does not work
//(Proved)
printWord("word");

var printWord = function() {
	if(typeof(word) == typeof("a string") && !word.includes(" ")){
		console.log(word);
	} else {
		console.log("Not a word");
	}
}
