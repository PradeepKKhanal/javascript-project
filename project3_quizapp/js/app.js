const questionsCollection = {
	"Which of the following is markup language?": [
		{ HTML: "correct" },
		{ CSS: "wrong" },
		{ JavaScript: "wrong" },
		{ PHP: "wrong" },
	],
	"What year was Javascript launched?": [
		{ 1996: "correct" },
		{ 1995: "wrong" },
		{ 1994: "wrong" },
		{ "none of the above": "wrong" },
	],
	"What does CSS stands for?": [
		{ "Hypertext Markup Language": "wrong" },
		{ "Cascading Style Sheet": "correct" },
		{ "Json Object Notation": "wrong" },
		{ "Helicopters Terminals Motorboats Lamborginis": "wrong" },
	],
};

// element selection
const question = document.querySelector("#question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const suggestion = document.querySelector("#suggestion");

let i = 0;
const questions = Object.keys(questionsCollection);
function questionProvision() {
	question.textContent = questions[i];
	option1.textContent = Object.keys(questionsCollection[questions[i]][0])[0];
	option2.textContent = Object.keys(questionsCollection[questions[i]][1])[0];
	option3.textContent = Object.keys(questionsCollection[questions[i]][2])[0];
	option4.textContent = Object.keys(questionsCollection[questions[i]][3])[0];
	i++;
}
questionProvision();
const submit = document.querySelector("button[type='submit']");
const form = document.querySelector("form");

let score = 0;
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const selectedRadioButton = document.querySelector(
		'input[name="option"]:checked'
	);
	if (selectedRadioButton) {
		const selectedId = selectedRadioButton.id;
		const selectedLabel = document.querySelector(`label[for=${selectedId}]`);
		const selectedAnswer = selectedLabel.textContent;
		
		if (selectedAnswer) {
			const answers = questionsCollection[question.textContent];
			for (let i of answers) {
				const key = Object.keys(i);
				if (key[0] === selectedAnswer) {
					if (i[key[0]] === "correct") {
						score++;
					}
				}
			}
		}
		if (i < questions.length) {
			questionProvision();
		} else {
			section = document.querySelector("section");
			section.innerHTML = `<p>The final score is ${score}</p>`;
			section.style.textAlign = "center";
			section.style.padding = "10px";
		}
		
		suggestion.textContent = "";
	} 
	else {	
		suggestion.textContent = "Please select the answer !!!";
	}
	form.reset();
});


 