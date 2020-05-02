// TODO console.log cleanup when the project is done
// TODO speaker button muted toggle

let keyboard = [
	["Q","W","E","R","T","Y","U","I","O","P"],
	["A","S","D","F","G","H","J","K","L",],
	["Z","X","C","V","B","N","M",],
	["_",],
];
let promptTexts = [
	{
		id:0, 
		question:"./images/prompts-pics/thematicAnalys.png", 
		keyword:["thematic analys", "picture", "image"]
	},
	{
		id:1, 
		question:"./images/prompts-pics/sample.png", 
		keyword:"data" 
	},
	{
		id:2, 
		question:"./images/prompts-pics/questionnaire-scale.jpg",
		keyword:["questionnaire scale", "scale"]
	},
	{
		id:3, 
		question:"./images/prompts-pics/interviewNotes.png", 
		keyword:["interview notes", "interview"]
	},
	{
		id:4, 
		question:"./images/prompts-pics/interview1.jpg", 
		keyword:["interview", "recorder", "recording"]
	},
	{
		id:5, 
		question:"./images/prompts-pics/interview.jpeg", 
		keyword:"guidelines"
	},
	{
		id:6, 
		question:"./images/prompts-pics/interview-notes.png", 
		keyword:"interview notes"
	},
	{
		id:7, 
		question:"./images/prompts-pics/dataset2.png", 
		keyword:"chart"
	},
	{
		id:8, 
		question:"./images/prompts-pics/dataSet6.png", 
		keyword:["picture", "image"]
	},
	{
		id:9, 
		question:"./images/prompts-pics/dataSet5.jpg", 
		keyword:"chart"
	},
	{
		id:10, 
		question:"./images/prompts-pics/dataSet3.png", 
		keyword:["dataset", "correlation chart", "correlation"]
	},
	{
		id:11, 
		question:"./images/prompts-pics/dataSet1.jpg", 
		keyword:["dataset", "correlation chart", "correlation"]
	},
	{
		id:12, 
		question:"./images/prompts-pics/dataSet.jpg", 
		keyword:["picture", "image"]
	},
	{
		id:13, 
		question:"./images/prompts-pics/survey.png?v=2", 
		keyword:["survey", "questionnaire"]
	},
	{
		id:14, 
		question:"./images/prompts-pics/interview.jpeg",
		keyword:"interview"
	}
];
/*[
	{id:0, question:"Some text about quizis", keyword:["quiz", "quizes", "questionaries"], explanation: "here will be some additional info why computer answer is correct"},
	{id:1, question:"Some text about surveys", keyword:["survey", "surveys"], explanation: "here will be some additional info why computer answer is correct"},
	{id:2, question:"Some text about experiments", keyword:["experiment", "exp"], explanation: "here will be some additional info why computer answer is correct"},
	{id:3, question:"Some text about interviews", keyword:"interview", explanation: "here will be some additional info why computer answer is correct"},
	{id:4, question:"Some text about case studies", keyword:"case study", explanation: "here will be some additional info why computer answer is correct"},
	{id:5, question:"Some text about observations", keyword:"observation", explanation: "here will be some additional info why computer answer is correct"},
	{id:6, question:"https://avatars1.githubusercontent.com/u/13436812?s=460&v=4", keyword:"caupo-profile", explanation: "here will be some additional info why computer answer is correct"},
	{id:7, question:"Observing", keyword:"observing"},
	{id:8, question:"quizis", keyword:"quizis"},
	{id:9, question:"surveys", keyword:"surveys"},
	{id:10, question:"experiments", keyword:"experiments"},
	{id:11, question:"interviews", keyword:"interviews"},
	{id:12, question:"case studies", keyword:"case studies"},
	{id:13, question:"images", keyword:"images"},
	{id:14, question:"south park", keyword:"south park"},
	{id:15, question:"code monkeys are the best monkeys", keyword:"codemonkey"},
	{id:16, question:"Counter Strike", keyword:"CSGO"},
	{id:17, question:"i dont event know what to put here", keyword:"dunno"},
	{id:18, question:"bananas", keyword:"banana"},
	{id:19, question:'<iframe width="560" height="315" src="https://www.youtube.com/embed/lJIrF4YjHfQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', keyword:["youtube", "embed", "tutorial"]},
	{id:20, question:'<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', keyword:"rick"},
];*/
let tempPrompts = promptTexts;
let promptsInserted;
let activePrompts = [];
let insertedKeywords = [];
let maxPrompts = 5;
let maxLevels = 3;
let currentLevel = 1;
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
let levelElement = document.querySelector("#level-nr");
let correctAnswers = 0;
let soundMuted = false;
let keyboardSounds = [
	"key_a.wav",
	"key_a2.wav",
	"key_e.wav",
	"key_e2.wav",
	"key_enter.wav",
	"key_enter2.wav",
	"key_l.wav",
	"key_l2.wav",
	"key_r.wav",
	"key_r2.wav",
	"key_s.wav",
	"key_s2.wav",
	"key_t.wav",
	"key_t2.wav",
];

let keywordSounds = [
	"keyword1.mp3",
	"keyword2.mp3",
	"keyword3.mp3",
	"keyword4.mp3",
];

function PlaySound(soundFileName) {
	if(soundMuted) {
		return;
	}
	var audio = new Audio("sounds/"+soundFileName);
    audio.type = 'audio/wav';
	audio.play();
}

let speakerBtn = document.querySelector(".speaker img");

function ToggleAudio() {
	soundMuted = !soundMuted;

	if(soundMuted) {
        speakerBtn.src = "./images/speaker-muted.svg";
        speakerBtn.style = "transform: scale(1.0)";
	} else {
        speakerBtn.src = "./images/speaker-unmuted.svg";
        speakerBtn.style = "transform: scale(1.1)";
	}
}

function InitKeyboard() {
	let keyboardContainer = document.querySelector(".keyboard-container");
	
	for(let r = 0, row; row = keyboard[r]; r++) {
		for(let i = 0, letter; letter = row[i]; i++) {
			let btnElement = document.createElement("button");
			btnElement.id = "letter-"+letter;
			btnElement.innerText = letter;
			btnElement.addEventListener("click", function() { console.log("KEY PRESS "+letter); KeyPressed(letter); });
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

function GetRandomItemsFrom(allPromptArr, howManyItems) {
	let fullArrayWithLevels = [];
	let taken = new Array(howManyItems * maxLevels);
	let tempPromptArr = allPromptArr.slice();
	
	for(let i = 0; i < maxLevels; i++) {
		let inOneLevel = howManyItems;
		console.log(i);
		var result = new Array(inOneLevel),
        len = tempPromptArr.length;
		if (inOneLevel > len)
			throw new RangeError("getRandom: more elements taken than available");

		while (inOneLevel--) {
			var x = Math.floor(Math.random() * len);
			result[inOneLevel] = tempPromptArr.splice(x, 1)[0];
			console.log("GetRandomItemsFrom", result[inOneLevel]);
			len--;
		}
		fullArrayWithLevels[i] = result;
	}
	console.log("fullArrayWithLevels", fullArrayWithLevels);
    
    return fullArrayWithLevels;
}

function IsItemAlreadyInArray(findId, fullArrayWithLevels, result) {
	for(let i = 0; i < maxLevels; i++) {
		if(fullArrayWithLevels[i] === undefined) {
			continue;
		}
		
		for(let x = 0; x < maxLevels; x++) {
			if(fullArrayWithLevels[i][x].id == findId) {
				return true;
			}
		}
	}
	
	for(let i = 0; i < result.length; i++) {
		if(result[i] === undefined) {
			continue;
		}
		if(result[i].id == findId) {
			return true;
		}
	}
	
	return false;
}

function StartGame() {
	tempPrompts = promptTexts;
	activePrompts = [];
	insertedKeywords = [];
	promptsInserted = -1;
	correctAnswers = 0;
	currentLevel = 1;
	keywordElementInput.value = "";
	activePrompts = GetRandomItemsFrom(tempPrompts, 5);
	SetNewToActivePrompt();
	console.log(activePrompt);
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
	SetMaxPromptLabel();
	summaryTable.innerHTML = "";
	UpdateLevelLabel();
	PlaySound(GetRandomKeywordSound());
	
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
	return (question.startsWith("http://") || question.startsWith("https://")
	 || question.startsWith("./images/"));
}

function SetActiveTextToPrompt() {
	HideError();
	
	if(IsQuestionImage(activePrompt.question)) {
		promptElement.innerText = "";
		let imageEl = GetImageElFromLink(activePrompt.question);
		promptElement.appendChild(imageEl);
		return;
	}
	
	promptElement.innerHTML = activePrompt.question;
	errorCanBeShown = false;
	setTimeout(EnableErrors, 100);
}

function EnableErrors() {
	errorCanBeShown = true;
}

function SetNewToActivePrompt() {
	promptsInserted++;
	console.log("SetNewToActivePrompt", currentLevel, promptsInserted);
	activePrompt = activePrompts[(currentLevel-1)][promptsInserted];
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
	
	PlaySound(GetRandomKeywordSound());
	SetToAnswers(keywordValue);
	keywordElementInput.value = "";
	
	if((promptsInserted + 1) >= maxPrompts) {
		if(currentLevel >= maxLevels) {
			ShowSection("summary");
			return;
		}
		
		console.log("currenLavel 1 ", currentLevel);
		currentLevel++;
		console.log("currenLavel 2 ", currentLevel);
		promptsInserted = -1;
		UpdateLevelLabel();
	}
	console.log("curentLvl, maxPrompts, promptsInserted ", currentLevel, maxPrompts, promptsInserted);
	
	SetNewToActivePrompt();
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
}

function UpdateLevelLabel() {
	levelElement.innerText = currentLevel;
}

function GetKeyWithLetter(letter) {
	return document.querySelector("#letter-"+letter);
}

function GetRandomKeyboardSound() {
	return keyboardSounds[getRandomArbitrary(0, keyboardSounds.length)];
}

function GetRandomKeywordSound() {
	return keywordSounds[getRandomArbitrary(0, keywordSounds.length)];
}

function getRandomArbitrary(min, max) {
	let rand = Math.random() * (max - min) + min;
	//console.log("RANDOM", parseInt(rand.toFixed(0)));
    return parseInt(rand.toFixed(0));
}

function KeyPressed(letter) {
	//console.log("KEY PRESSED ["+letter+"]");
	HideError();
	PlaySound(GetRandomKeyboardSound());
	
	let buttonElement = GetKeyWithLetter(letter);
	if(buttonElement !== null && buttonElement !== undefined) {
		buttonElement.classList.add("active");
		setTimeout(KeyNonActive, 200, letter);
	} else {
		console.log("ERROR: Button element undefined or null (1)");
	}

    if(letter === "_") {
        keywordElementInput.value += " ";
    } else if(letter === "backspace") {
		DeleteLastCharOfInput();
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
	
	AddRowToSummary("Your answer", "Prompt text", "Computer answer", undefined);
	let promptCount = 0;
	let levelCount = 0;
	
	for(let i = 0, insertedKeyword; insertedKeyword = insertedKeywords[i]; i++) {
		if(promptCount % maxPrompts == 0) {
			levelCount++;
			AddRowToSummary("", "LEVEL "+levelCount, "", undefined);
		}
		promptCount++;
		
		let thisPrompt = GetPromptById(insertedKeyword.id);
		console.log("ShowSummary", thisPrompt, thisPrompt.question);
		AddRowToSummary(insertedKeyword.keyword, thisPrompt.question, thisPrompt.keyword, thisPrompt.explanation);
	}
	
	similarity.innerHTML = "Similary between you and computer:<br> <strong>"+CalculateSimilarities()+"%</strong>";
}

function GetComputerAnswerStr(computerAnswer) {
	let compAnswerLabel = "";
	
	if(Array.isArray(computerAnswer)) {
		for(let i = 0, cAnswer; cAnswer = computerAnswer[i]; i++) {
			compAnswerLabel += cAnswer.toUpperCase()+", ";
		}
		compAnswerLabel = compAnswerLabel.substring(0, compAnswerLabel.length - 1);
	} else {
		compAnswerLabel = computerAnswer.toUpperCase();
	}
	
	return compAnswerLabel;
}

function CheckComputerAnswerWithKeyword(yourAnswer, computerAnswer) {
	let urAnswer = yourAnswer.toLowerCase();
	let correctness = 0;
	
	if(Array.isArray(computerAnswer)) {
		let tempCorrectness = 0;
		let tempCorrect = 0;
		
		for(let i = 0, cAnswer; cAnswer = computerAnswer[i]; i++) {
			tempCorrect = CompareAnswers(urAnswer, cAnswer);
			
			if(tempCorrect > tempCorrectness) {
				tempCorrectness = tempCorrect;
			}
			
			if(tempCorrectness == 1) {
				break;
			}
		}
		
		correctness += tempCorrectness;
	} else {
		correctness += CompareAnswers(urAnswer, computerAnswer);
	}
	
	return correctness;
}

function CompareAnswers(yourAnswer, computerAnswer) {
	let compAnswer = computerAnswer.toLowerCase();
	
	if(yourAnswer === compAnswer) {
		return 1;
	} else if(yourAnswer.includes(compAnswer) || compAnswer.includes(yourAnswer)) {
		return 0.5;
	}
	return 0;
}

function AddRowToSummary(yourAnswer, promptText, computerAnswer, exaplanationStr) {
	let row = document.createElement("tr");
	let yourTd = document.createElement("td");
	let promptTd = document.createElement("td");
	let computerTd = document.createElement("td");

	let yourTdP = document.createElement("p");
	yourTdP.innerText = yourAnswer.toUpperCase();
	yourTd.appendChild(yourTdP);

	let paraf = document.createElement("p");
	paraf.innerHTML = GetComputerAnswerStr(computerAnswer);

	if(exaplanationStr !== undefined) {
		paraf.classList.add("w3-tooltip");
		paraf.innerHTML += '<span style="position:absolute;left:0;bottom:18px" class="w3-text w3-tag">'+exaplanationStr+'</span>' +
			'<span class="explanation">i</span>';
	}

	computerTd.appendChild(paraf);
	
	if(IsQuestionImage(promptText)) {
		let imageEl = GetImageElFromLink(promptText);
		promptTd.appendChild(imageEl);
	} else {
		let promptParaf = document.createElement("p");
		promptParaf.innerHTML = promptText;
		promptTd.appendChild(promptParaf);
	}
	
	let urAnswer = yourAnswer.toLowerCase();
	let answerCorrectness = CheckComputerAnswerWithKeyword(yourAnswer, computerAnswer);
	
	if(yourAnswer == "" && computerAnswer == "") {
		row.classList.add("level");
	} else if(answerCorrectness === 1) {
		row.classList.add("correct");
		correctAnswers += CheckComputerAnswerWithKeyword(yourAnswer, computerAnswer);
	} else if(answerCorrectness === 0.5) { // todo siia gettimine kui correct oli 1 puhul?
		row.classList.add("half-correct");
		correctAnswers += CheckComputerAnswerWithKeyword(yourAnswer, computerAnswer);
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
	console.log("CalculateSimilarities: correctAnswers", correctAnswers, "maxPrompts", maxPrompts, "maxLevels", maxLevels, "(maxPrompts * maxLevels)", (maxPrompts * maxLevels), "(correctAnswers/(maxPrompts * maxLevels))", (correctAnswers/(maxPrompts * maxLevels)));
	let similarity = (correctAnswers/(maxPrompts * maxLevels)) * 100;
	return similarity.toFixed(2);
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
		ShowSection("introduction");
		return;
	} else if(activeSection === "introduction" && e.keyCode == 13) {
		ShowSection("gameplay");
		return;
	} else if(activeSection === "summary" && e.keyCode == 13) {
		ShowSection("main-menu");
		return;
	} else if(activeSection !== "gameplay") {
		return;
	}
	
    e = e || window.event;
	
	//console.log("keycode", e.keyCode);
	
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
		case 8: KeyPressed("backspace"); break;
	}
};

window.addEventListener('keydown',function(e) {
	if(e.keyIdentifier=='U+0008'||e.keyIdentifier=='Backspace'||e.keyCode==8) {
		e.preventDefault();
		KeyPressed("backspace");
		return false;
	}
	if(e.keyIdentifier=='Space'||e.keyCode==32) {
		e.preventDefault();
	}
},true);

InitKeyboard();