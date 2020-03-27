let keyboard = [
	["Q","W","E","R","T","Y","U","I","O","P"],
	["A","S","D","F","G","H","J","K","L",],
	["Z","X","C","V","B","N","M",],
	["_",],
];
let promptTexts = [
	{id:0, question:"Some text about quizis", keyword:"quiz"},
	{id:1, question:"Some text about surveys", keyword:"survey"},
	{id:2, question:"Some text about experiments", keyword:"experiment"},
	{id:3, question:"Some text about interviews", keyword:"interview"},
	{id:4, question:"Some text about case studies", keyword:"case study"},
	{id:5, question:"Some text about observations", keyword:"observation"},
	{id:6, question:"https://avatars1.githubusercontent.com/u/13436812?s=460&v=4", keyword:"caupo-profile"},
];
let promptsInserted = 0;
let activePrompts = [];
let insertedKeywords = [];
let maxPrompts = 5;
let activePrompt = null;
let activeSection = "main-menu";
let keywordElementInput = document.querySelector("#keyword");
let errorCanBeShown = true;
let summaryTable = document.querySelector("#results");
let currentPromptElement = document.querySelector("#current-prompt");
let maxPromptElement = document.querySelector("#max-prompt");
let promptElement = document.querySelector("#prompt-text");
let errorContainer = document.querySelector("#error-notifier");
let enterButton = document.querySelector("#enter");
let dummyButton = document.querySelector("#dummy-btn");
let similarityElement = document.querySelector("#similarity");
let correctAnswers = 0;

// TODO klahvide sound effect Stas pidi otsima
// TODO klahvide sound effect Martin pidi otsima

// TODO console.log cleanup when the project is done

function InitKeyboard() {
	let keyboardContainer = document.querySelector(".keyboard-container");
	
	for(let r = 0, row; row = keyboard[r]; r++) {
		for(let i = 0, letter; letter = row[i]; i++) {
			let btnElement = document.createElement("button");
			btnElement.id = "letter-"+letter;
			btnElement.innerText = letter;
			btnElement.onclick = "KeyPressed('"+letter+"')";
			btnElement.className = "letter";
			keyboardContainer.appendChild(btnElement);
		}
		
		keyboardContainer.appendChild(document.createElement("br"));
	}
	
	keyboardContainer.appendChild(document.createElement("br"));
}

function GetAllSections() {
	return document.querySelectorAll("section");
}

function SetSectionActive(sectionName) {
	let section = document.querySelector("#"+sectionName);
	
	if(section !== null && section !== undefined) {
		section.classList.add("active");
	}
	
	activeSection = sectionName;
}

function ShowSection(sectionName) {
	let sections = GetAllSections();
	
	for(let i = 0, section; section = sections[i]; i++) {
		section.classList.remove("active");
	}
	
	SetSectionActive(sectionName);
	
	if(sectionName == "gameplay") {
		StartGame();
	} else if(sectionName == "summary") {
		ShowSummary();
	}
}

function GetRandomItemsFrom(arr, howManyItems) {
    var result = new Array(howManyItems),
        len = arr.length,
        taken = new Array(len);
    if (howManyItems > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (howManyItems--) {
        var x = Math.floor(Math.random() * len);
        result[howManyItems] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function StartGame() {
	activePrompts = [];
	insertedKeywords = [];
	promptsInserted = -1;
	correctAnswers = 0;
	keywordElementInput.value = "";
	activePrompts = GetRandomItemsFrom(promptTexts, 5);
	SetNewToActivePrompt();
	console.log(activePrompt);
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
	SetMaxPromptLabel();
	summaryTable.innerHTML = "";
	
	console.log("GAME STARTED");
	console.log("PROMPTS: ", activePrompts);
}

function SetCurrentPromptLabel() {
	currentPromptElement.innerText = (promptsInserted + 1);
}

function SetMaxPromptLabel() {
	maxPromptElement.innerText = maxPrompts;
}

function GetImageElFromLink(linkUrl) {	
	let imageEl = document.createElement("img");
	imageEl.alt = "Prompt image";
	imageEl.src = linkUrl;
	return imageEl;
}

function IsQuestionImage(question) {
	return (question.includes("http://") || question.includes("https://"));
}

function SetActiveTextToPrompt() {
	HideError();
	
	if(IsQuestionImage(activePrompt.question)) {
		promptElement.innerText = "";
		let imageEl = GetImageElFromLink(activePrompt.question);
		promptElement.appendChild(imageEl);
		return;
	}
	
	promptElement.innerText = activePrompt.question;
	errorCanBeShown = false;
	setTimeout(EnableErrors, 100);
}

function EnableErrors() {
	errorCanBeShown = true;
}

function SetNewToActivePrompt() {
	promptsInserted++;
	activePrompt = activePrompts[promptsInserted];
	SetCurrentPromptLabel();
}

function SetToAnswers(keyword) {
	insertedKeywords.push({id:activePrompt.id, keyword:keyword});
}

function GetPromptById(id) {
	for(let i = 0, item; item = promptTexts[i]; i++) {
		if(item.id === id) {
			return item;
		}
	}
	return {id:-1,question:"INVALID PROMPT",keyword:"INVALID PROMPT"};
}

function ShowError(message) {
	if(!errorCanBeShown) {
		return;
	}
	
	if(errorContainer !== undefined && errorContainer !== null) {
		errorContainer.classList.add("active");
		errorContainer.innerText = "ERROR: "+message;
	}
}

function HideError() {	
	if(errorContainer !== undefined && errorContainer !== null) {
		errorContainer.classList.remove("active");
		errorContainer.innerText = "";
	}
}

function InsertKeyword(event) {
	let keywordValue = keywordElementInput.value;
	if(event !== undefined) {
		console.log("keycode", event.keyCode);
		event.preventDefault();
	}
	
	if(keywordValue.length < 3) {
		ShowError("Keyword must be atleast 3 symbols long.");
		return;
	}
	
	SetToAnswers(keywordValue);
	keywordElementInput.value = "";
	SetNewToActivePrompt();
	
	if(promptsInserted >= maxPrompts) {
		ShowSection("summary");
		return;
	}
	
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
}

function GetKeyWithLetter(letter) {
	return document.querySelector("#letter-"+letter);
}

function KeyPressed(letter) {
	console.log("KEY PRESSED ["+letter+"]");
	HideError();
	
	let buttonElement = GetKeyWithLetter(letter);
	if(buttonElement !== null && buttonElement !== undefined) {
		buttonElement.classList.add("active");
		setTimeout(KeyNonActive, 200, letter);
	} else {
		console.log("ERROR: Button element undefined or null (1)");
	}
	
	if(letter === "_") {
		keywordElementInput.value += " ";	
	} else {
		keywordElementInput.value = keywordElementInput.value+letter.toUpperCase();	
	}
	dummyButton.focus(); // NOTE(Caupo 26.03.2020): Fixes case where player clickes on button and then tries to press enter. Without this row the same letter is clicked.
}

function KeyNonActive(letter) {
	let buttonElement = GetKeyWithLetter(letter);
	
	if(buttonElement !== null && buttonElement !== undefined) {
		buttonElement.classList.remove("active");
	} else {
		console.log("ERROR: Button element undefined or null (2)");
	}
}

function ShowSummary() {
	console.log("SUMMARY");
	console.log("Inserted keywords: "+promptsInserted);
	console.log("Insrted keyword data: ", insertedKeywords);
	
	AddRowToSummary("Your answer", "Prompt text", "Computer answer");
	
	for(let i = 0, insertedKeyword; insertedKeyword = insertedKeywords[i]; i++) {
		let thisPrompt = GetPromptById(insertedKeyword.id);
		console.log("ShowSummary", thisPrompt, thisPrompt.question);
		AddRowToSummary(insertedKeyword.keyword, thisPrompt.question, thisPrompt.keyword);
	}
	
	similarity.innerHTML = "Similary between you and computer:<br> <strong>"+CalculateSimilarities()+"%</strong>";
}

function AddRowToSummary(yourAnswer, promptText, computerAnswer) {
	let row = document.createElement("tr");
	let yourTd = document.createElement("td");
	let promptTd = document.createElement("td");
	let computerTd = document.createElement("td");
	
	yourTd.innerText = yourAnswer.toUpperCase();
	computerTd.innerText = computerAnswer.toUpperCase();
	
	if(IsQuestionImage(promptText)) {
		let imageEl = GetImageElFromLink(promptText);
		promptTd.appendChild(imageEl);
	} else {
		promptTd.innerText = promptText;
	}
	
	if(yourAnswer.toLowerCase() === computerAnswer.toLowerCase()) {
		row.classList.add("correct");
		correctAnswers++;
	}
	
	row.appendChild(yourTd);
	row.appendChild(promptTd);
	row.appendChild(computerTd);
	summaryTable.appendChild(row);
}

function DeleteLastCharOfInput() {
	let keywordCurrently = keywordElementInput.value+"";
	if(keywordCurrently.length > 0) {
		keywordElementInput.value = keywordCurrently.substring(0, keywordCurrently.length - 1);
	}
}

function CalculateSimilarities() {
	return correctAnswers/maxPrompts*100;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        KeyPressed("_");
    }
}

document.onkeypress = function (e) {
	e.preventDefault();
	HideError();
	
	if(activeSection === "main-menu" && e.keyCode == 13) {
		ShowSection("gameplay");
		return;
	} else if(activeSection === "summary" && e.keyCode == 13) {
		ShowSection("main-menu");
		return;
	} else if(activeSection !== "gameplay") {
		return;
	}
	
    e = e || window.event;
	
	console.log("keycode", e.keyCode);
	
	switch(e.keyCode) {
		case 81:case 113: KeyPressed("Q"); break;
		case 87:case 119: KeyPressed("W"); break;
		case 69:case 101: KeyPressed("E"); break;
		case 82:case 114: KeyPressed("R"); break;
		case 84:case 116: KeyPressed("T"); break;
		case 89:case 121: KeyPressed("Y"); break;
		case 85:case 117: KeyPressed("U"); break;
		case 73:case 105: KeyPressed("I"); break;
		case 79:case 111: KeyPressed("O"); break;
		case 80:case 112: KeyPressed("P"); break;
		case 65:case 97: KeyPressed("A"); break;
		case 83:case 115: KeyPressed("S"); break;
		case 68:case 100: KeyPressed("D"); break;
		case 70:case 102: KeyPressed("F"); break;
		case 71:case 103: KeyPressed("G"); break;
		case 72:case 104: KeyPressed("H"); break;
		case 74:case 106: KeyPressed("J"); break;
		case 75:case 107: KeyPressed("K"); break;
		case 76:case 108: KeyPressed("L"); break;
		case 90:case 122: KeyPressed("Z"); break;
		case 88:case 120: KeyPressed("X"); break;
		case 67:case 99: KeyPressed("C"); break;
		case 86:case 118: KeyPressed("V"); break;
		case 66:case 98: KeyPressed("B"); break;
		case 78:case 110: KeyPressed("N"); break;
		case 77:case 109: KeyPressed("M"); break;
		case 32: KeyPressed("_"); break;
		case 13: InsertKeyword(); break;
		case 8: DeleteLastCharOfInput(); break;
	}
};

window.addEventListener('keydown',function(e) {
	if(e.keyIdentifier=='U+0008'||e.keyIdentifier=='Backspace'||e.keyCode==8) {
		e.preventDefault();
		DeleteLastCharOfInput();
		return false;
	}
	if(e.keyIdentifier=='Space'||e.keyCode==32) {
		e.preventDefault();
	}
},true);

InitKeyboard();