const upperCaseGroup = [..."abcdefghijklmnopqrstuvwxyz".toUpperCase()];
// console.log(upperCaseGroup);

const lowerCaseGroup = [..."abcdefghijklmnopqrstuvwxyz"];
// console.log(lowerCaseGroup);

const numbersGroup = [..."0123456789"];
// console.log(numbersGroup);

function generateBasicSymbolsArray() {
	const symbolsArray = [];
	for (let charCode = 33; charCode <= 47; charCode++) {
		symbolsArray.push(String.fromCharCode(charCode));
	}
	for (let charCode = 58; charCode <= 64; charCode++) {
		symbolsArray.push(String.fromCharCode(charCode));
	}
	for (let charCode = 91; charCode <= 96; charCode++) {
		symbolsArray.push(String.fromCharCode(charCode));
	}
	for (let charCode = 123; charCode <= 126; charCode++) {
		symbolsArray.push(String.fromCharCode(charCode));
	}
	return symbolsArray;
}

const symbolsGroup = generateBasicSymbolsArray();
// console.log(symbolsGroup);

function passwordGenerator(length, type) {
	let password = "";

	for (let i = 0; i < length; i++) {
		password += type[Math.floor(Math.random() * type.length)];
	}
	return password;
}

// console.log(passwordGenerator(7, upperCaseGroup));

function passwordTypeSelector(p1, p2, p3, p4) {
	let type = "";
	if (p1 && !p2 && !p3 && !p4) {
		type = upperCaseGroup;
	} else if (!p1 && p2 && !p3 && !p4) {
		type = lowerCaseGroup;
	} else if (!p1 && !p2 && p3 && !p4) {
		type = numbersGroup;
	} else if (!p1 && !p2 && !p3 && p4) {
		type = symbolsGroup;
	} else if (p1 && p2 && !p3 && !p4) {
		type = [...upperCaseGroup, ...lowerCaseGroup];
	} else if (p1 && !p2 && p3 && !p4) {
		type = [...upperCaseGroup, ...numbersGroup];
	} else if (p1 && !p2 && !p3 && p4) {
		type = [...upperCaseGroup, ...symbolsGroup];
	} else if (!p1 && p2 && p3 && !p4) {
		type = [...lowerCaseGroup, ...numbersGroup];
	} else if (!p1 && p2 && !p3 && p4) {
		type = [...lowerCaseGroup, ...symbolsGroup];
	} else if (!p1 && !p2 && p3 && p4) {
		type = [...numbersGroup, ...symbolsGroup];
	} else if (p1 && p2 && p3 && !p4) {
		type = [...upperCaseGroup, ...lowerCaseGroup, ...numbersGroup];
	} else if (p1 && p2 && !p3 && p4) {
		type = [...upperCaseGroup, ...lowerCaseGroup, ...symbolsGroup];
	} else if (p1 && !p2 && p3 && p4) {
		type = [...upperCaseGroup, ...numbersGroup, ...symbolsGroup];
	} else if (!p1 && p2 && p3 && p4) {
		type = [...lowerCaseGroup, ...numbersGroup, ...symbolsGroup];
	} else if (p1 && p2 && p3 && p4) {
		type = [
			...upperCaseGroup,
			...lowerCaseGroup,
			...numbersGroup,
			...symbolsGroup,
		];
	}
	return type;
}

function reset() {
	// console.log(document.querySelectorAll("input"))
	document.querySelectorAll("input").forEach((element) => {
		element.value = "";
		element.checked = false;
	});
}
const generateButton = document.querySelector("button");
const passwordDisplay = document.querySelector("#passwordDisplay");

// console.log(passwordDisplay.textContent)
generateButton.addEventListener("click", () => {
	let passwordLength = document.querySelector('input[type="number"]').value;
	// console.log(passwordLength)

	let passwordtype1 = document.querySelector("#uppercase:checked");
	let passwordtype2 = document.querySelector("#lowercase:checked");
	let passwordtype3 = document.querySelector("#numbers:checked");
	let passwordtype4 = document.querySelector("#symbols:checked");

	// console.log(passwordtype1)
	// console.log(passwordtype2)
	// console.log(passwordtype3)
	// console.log(passwordtype4)
	if (
		passwordLength > 0 &&
		(passwordtype1 ||
			passwordtype2 ||
			passwordtype3 ||
			passwordtype3 ||
			passwordtype4)
	) {
		let passwordType = passwordTypeSelector(
			passwordtype1,
			passwordtype2,
			passwordtype3,
			passwordtype4
		);
		passwordDisplay.textContent = passwordGenerator(
			passwordLength,
			passwordType
		);
	} else {
		passwordDisplay.textContent =
			"Please enter the length and choose for your password type";
	}

	reset();
});
