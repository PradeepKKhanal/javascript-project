alphabet = "abcdefghijklmnopqurstuvwxyz";

function wordGenerator(wordLength) {
	let word = "";
	for (let i=0; i < wordLength; i++) {
		word += alphabet[Math.floor(Math.random() * 26)];
	}
	// console.log(word);
    return word
}

// wordGenerator(5);

// console.log(alphabet[8]);
// console.log(alphabet[Math.floor(Math.random() * 26)]);


function paragraphGenerator(paragraphLength,wordGenerator){
    let paragraph="";
    for(let i=0;i<paragraphLength;i++){
        paragraph += wordGenerator(Math.floor(Math.random()*9))+" "
    }
    console.log(paragraph)
}

paragraphGenerator(20,wordGenerator)