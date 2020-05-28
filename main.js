
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
		keyword:["thematic analysis", "picture", "image"]
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
		keyword:["interview notes", "interview", "notes"]
	},
	{
		id:4,
		question:"./images/prompts-pics/interview1.jpg",
		keyword:["interview", "recorder", "recording"]
	},
	{
		id:5,
		question:"./images/prompts-pics/interview.jpeg",
		keyword:["guidelines", "interview"]
	},
	{
		id:6,
		question:"./images/prompts-pics/interview-notes.png",
		keyword:["interview notes", "interview"]
	},
	{
		id:7,
		question:"./images/prompts-pics/dataset2.png",
		keyword:["chart", "data analysis"]
	},
	{
		id:8,
		question:"./images/prompts-pics/dataSet6.png",
		keyword:["picture", "image", "chart", "data analysis", "dataset"]
	},
	{
		id:9,
		question:"./images/prompts-pics/dataSet5.jpg",
		keyword:["chart", "data analysis", "dataset"]
	},
	{
		id:10,
		question:"./images/prompts-pics/dataSet3.png",
		keyword:["dataset", "correlation chart", "correlation", "chart"]
	},
	{
		id:11,
		question:"./images/prompts-pics/dataSet1.jpg",
		keyword:["dataset", "correlation chart", "correlation"]
	},
	{
		id:12,
		question:"./images/prompts-pics/dataSet.jpg",
		keyword:["picture", "image", "dataset"]
	},
	{
		id:13,
		question:"./images/prompts-pics/survey.png?v=2",
		keyword:["survey", "questionnaire"]
	},
	{
		id:14,
		question:"./images/prompts-pics/interview.jpeg",
		keyword:["guidelines", "interview"]
	},
	{
		id:15,
		question:"./images/prompts-pics/area-chart.png",
		keyword:["area chart", "chart", "data analysis", "dataset"]
		},
	{
		id:16,
		question:"./images/prompts-pics/Bar-chart.png",
		keyword:"Bar chart"
	},
	{
		id:17,
		question:"./images/prompts-pics/candlestick-chart.png",
		keyword:["candlestick chart", "chart", "data analysis", "dataset"]
	},
	{
		id:18,
		question:"./images/prompts-pics/column-chart.png",
		keyword:["column chart", "chart", "data analysis", "dataset"]
	},
	{
		id:19,
		question:"./images/prompts-pics/combo-chart.png",
		keyword:["combo chart", "chart", "data analysis", "dataset"]
	},
	{
		id:20,
		question:"./images/prompts-pics/Frequency.png",
		keyword:["Frequency", "data analysis"]
	},
	{
		id:21,
		question:"./images/prompts-pics/line-chart.png",
		keyword: [line chart", "chart", "data analysis", "dataset"]
	},
	{
		id:22,
		question:"./images/prompts-pics/mean.png",
		keyword:["mean", "descriptive statistics"]
	},
	{
		id:23,
		question:"./images/prompts-pics/mean2.png",
		keyword:["mean","descriptive statistics"]
	},
	{
		id:24,
		question:"./images/prompts-pics/mean3.png?v=4",
		keyword:["mean", "descriptive statistics"]
	},
	{
		id:25,
		question:"./images/prompts-pics/mean-mode-median.png",
		keyword:["mean", "mode", "median", "descriptive statistics"]
	},
	{
		id:26,
		question:"./images/prompts-pics/median.png",
		keyword:["median", "descriptive statistics"]
	},
	{
		id:27,
		question:"./images/prompts-pics/median1.png",
		keyword:["median", "descriptive statistics"]
	},
	{
		id:28,
		question:"./images/prompts-pics/median2.png",
		keyword:["median", "descriptive statistics"]
	},
	{
		id:29,
		question:"./images/prompts-pics/mode.png",
		keyword:["mode","descriptive statistics"]
	},
	{
		id:30,
		question:"./images/prompts-pics/mode1.png",
		keyword:["mode", "descriptive statistics"]
	},
	{
		id:31,
		question:"./images/prompts-pics/pie-chart.png",
		keyword:["pie chart", "chart", "data analysis", "dataset"]
	},
	{
		id:32,
		question:"./images/prompts-pics/scatter-chart.png",
		keyword:[scatter chart", "chart", "data analysis", "dataset"]
	},
	{
		id:33,
		question:"./images/prompts-pics/Standard-Deviation.png",
		keyword:["stadard deviation", "descriptive statistics"]
	},
	{
		id: 34,
		question: '<iframe src="https://giphy.com/embed/l2QDLc1d9FEy7Ip5m" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/soulpancake-look-looking-l2QDLc1d9FEy7Ip5m">via GIPHY</a></p>',
		keyword: ["observation", "method"]
	},
	{
		id: 35,
		question: '<iframe src="https://giphy.com/embed/5z9K3fOg2NRIzwmaKH" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/talking-thinking-reading-5z9K3fOg2NRIzwmaKH">via GIPHY</a></p>',
		keyword:["focus group", "method"]
	},
	{
		id: 36,
		question: '<iframe src="https://giphy.com/embed/fng8OzU2DvO2NCGeLY" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fng8OzU2DvO2NCGeLY">via GIPHY</a></p>',
		keyword:["pie chart", "chart", "data analysis", "dataset"]
	},
	{
		id: 37,
		question: '<iframe src="https://giphy.com/embed/8gNQZ9IpkcdiAjfOgN" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/illustration-marketing-data-8gNQZ9IpkcdiAjfOgN">via GIPHY</a></p>',
		keyword:["area chart", "chart", "data analysis", "dataset"]
	},
	{
		id: 38,
		question: '<iframe src="https://giphy.com/embed/RfMFXMomqJFIWzlxOD" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hyperrpg-twitch-kollok-kollok1991-RfMFXMomqJFIWzlxOD">via GIPHY</a></p>',
		keyword:["document study", "study", "case study"]
	},
	{
		id: 39,
		question: '<iframe src="https://giphy.com/embed/3Kp6sZlMqxphC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/benglabs-httpswwwopenbeeldennlmedia10811-3Kp6sZlMqxphC">via GIPHY</a></p>',
		keyword:["document study", "study", "case study"]
	}

];

let maxPromptTotal = 0;
let maxPrompts = [0, 2, 3, 5]; // Max prompts per level. Index 1 = level 1 prompts, index 2 = level 2 prompts and so on. Default is 5.
let tempMaxPrompts;
let maxLevels = 3;
let levelInsertedKeyword = [];

let finalSimilarity;
let tempPrompts = promptTexts;
let promptsInserted;
let activePrompts = [];
let insertedKeywords = [];
let currentLevel = 1;
let activePrompt = null;
let activeSection = "main-menu";
let keywordElementInput = document.querySelector("#keyword");
let errorCanBeShown = true;
let summaryTable = document.querySelector("#results");
let levelSummaryTable = document.querySelector("#level-results");
let currentPromptElement = document.querySelector("#current-prompt");
let maxPromptElement = document.querySelector("#max-prompt");
let promptElement = document.querySelector("#prompt-text");
let errorContainer = document.querySelector("#error-notifier");
let highscoreTable = document.querySelector("#highscore-table");
let enterButton = document.querySelector("#enter");
let dummyButton = document.querySelector("#dummy-btn");
let similarityElement = document.querySelector("#similarity");
let levelSimilarityElement = document.querySelector("#level-similarity");
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
			btnElement.addEventListener("click", function() { KeyPressed(letter); });
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

	if(sectionName == "highscore") {
		let playerName = prompt("What is your name? We are asking for it because of the highscore table.");

		let formData = new FormData();
		formData.append("name", playerName);
		formData.append("similarity", finalSimilarity);

		let request = new XMLHttpRequest();
		request.open("POST", "highscore.php");
		request.onload = function(e) {
			if (request.status == 200) {
				let xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						var playerScores = JSON.parse(this.responseText);
						highscoreTable.innerHTML = "";

						RenderHighscoreEntry({name:"Name", similarity: "similarity", created_at: "TIME"});
						for(let p = 0; p < playerScores.length; p++) {
							RenderHighscoreEntry(playerScores[p]);
						}

						SetSectionActive("highscore");
					}
				};
				xmlhttp.open("GET", "highscore.php", true);
				xmlhttp.send();

			} else {
				console.log("GAME SERVER ERROR", request.status);
			}
		};

		request.send(formData);
		return;
	}
	
	if(sectionName == "gameplay") {
		if(currentLevel == 1) {
			StartGame();
		} else {
			SetMaxPromptLabel();
		}
	} else if(sectionName == "summary") {
		ShowSummary();
	} else if(sectionName == "level-summary") {
		ShowLevelSummary();
	} else if(sectionName == "introduction") {
		PlaySound(GetRandomKeywordSound());
	}
}

function RenderHighscoreEntry(playerData) {
	let trEl = document.createElement("tr");
	let tdName = document.createElement("td");
	let pEl = document.createElement("p");
	pEl.innerText = playerData.name;
	tdName.appendChild(pEl);
	let tdSimilarity = document.createElement("td");
	pEl = document.createElement("p");
	pEl.innerText = playerData.similarity;
	tdSimilarity.appendChild(pEl);
	let tdCreatedAt = document.createElement("td");
	pEl = document.createElement("p");
	pEl.innerText = playerData.created_at;
	tdCreatedAt.appendChild(pEl);
	trEl.appendChild(tdName);
	trEl.appendChild(tdSimilarity);
	trEl.appendChild(tdCreatedAt);

	highscoreTable.append(trEl);
}

function GetRandomItemsFrom(allPromptArr) {
	let fullArrayWithLevels = [];
	for(let i = 0; i < maxPrompts.length; i++) {
		maxPromptTotal += maxPrompts[i];
	}

	let tempPromptArr = allPromptArr.slice();
	
	for(let i = 0; i < maxLevels; i++) {
		let inOneLevel = maxPrompts[i+1];
		var result = new Array(inOneLevel),
        len = tempPromptArr.length;
		if (inOneLevel > len)
			throw new RangeError("getRandom: more elements taken than available");

		while (inOneLevel--) {
			var x = Math.floor(Math.random() * len);
			result[inOneLevel] = tempPromptArr.splice(x, 1)[0];
			len = tempPromptArr.length;
		}
		fullArrayWithLevels[i] = result;
	}
    
    return fullArrayWithLevels;
}

function StartGame() {
	levelInsertedKeyword = [];
	for(let i = 0; i < maxPrompts.length; i++) {
		levelInsertedKeyword[i] = [];
	}

	tempPrompts = promptTexts;
	activePrompts = [];
	insertedKeywords = [];
	promptsInserted = -1;
	correctAnswers = 0;
	currentLevel = 1;
	keywordElementInput.value = "";
	activePrompts = GetRandomItemsFrom(tempPrompts);
	SetNewToActivePrompt();
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
	SetMaxPromptLabel();
	summaryTable.innerHTML = "";
	levelSummaryTable.innerHTML = "";
	UpdateLevelLabel();
	PlaySound(GetRandomKeywordSound());
}

function SetCurrentPromptLabel() {
	currentPromptElement.innerText = (promptsInserted + 1);
}

function SetMaxPromptLabel() {
	maxPromptElement.innerText = maxPrompts[currentLevel];
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
	activePrompt = activePrompts[(currentLevel-1)][promptsInserted];
	SetCurrentPromptLabel();
}

function SetToAnswers(keyword) {
	insertedKeywords.push({id:activePrompt.id, keyword:keyword});
	levelInsertedKeyword[currentLevel].push({id:activePrompt.id, keyword:keyword});
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
		event.preventDefault();
	}
	
	if(keywordValue.length < 3) {
		ShowError("Keyword must be atleast 3 symbols long.");
		return;
	}
	
	PlaySound(GetRandomKeywordSound());
	SetToAnswers(keywordValue);
	keywordElementInput.value = "";
	
	if((promptsInserted + 1) >= maxPrompts[currentLevel]) {
		if(currentLevel >= maxLevels) {
			ShowSection("summary");
			return;
		} else {
			ShowSection("level-summary");
		}
		
		currentLevel++;
		promptsInserted = -1;
		UpdateLevelLabel();
	}
	
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
    return parseInt(rand.toFixed(0));
}

function KeyPressed(letter) {
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
	correctAnswers = 0;

	AddRowToSummary("Your answer", "Prompt text", "Computer answer", undefined);
	let promptCount = 0;
	let levelCount = 0;
	tempMaxPrompts = maxPrompts.slice();
	AddRowToSummary("", "LEVEL 1", "", undefined);

	for(let i = 0, insertedKeyword; insertedKeyword = insertedKeywords[i]; i++) {
		promptCount++;
		let thisPrompt = GetPromptById(insertedKeyword.id);
		AddRowToSummary(insertedKeyword.keyword, thisPrompt.question, thisPrompt.keyword, thisPrompt.explanation);

		if(tempMaxPrompts[levelCount+1] > 0 && insertedKeywords[i+1] !== undefined) {
			tempMaxPrompts[levelCount+1] --;

			if(tempMaxPrompts[levelCount+1] == 0) {
				levelCount++;
				AddRowToSummary("", "LEVEL "+(levelCount+1), "", undefined);
			}
		}
	}

	finalSimilarity = CalculateSimilarities();
	similarityElement.innerHTML = "Similary between you and computer:<br> <strong>"+finalSimilarity+"%</strong>";
}

function ShowLevelSummary() {
	correctAnswers = 0;
	levelSummaryTable.innerHTML = "";

	AddRowToLevelSummary("Your answer", "Prompt text", "Computer answer", undefined);
	let promptCount = 0;
	let levelCount = 0;

	for(let i = 0, insertedKeyword; insertedKeyword = levelInsertedKeyword[currentLevel][i]; i++) {
		if(promptCount % maxPrompts[currentLevel] == 0) {
			levelCount++;
			AddRowToLevelSummary("", "LEVEL "+currentLevel, "", undefined);
		}
		promptCount++;

		let thisPrompt = GetPromptById(insertedKeyword.id);
		AddRowToLevelSummary(insertedKeyword.keyword, thisPrompt.question, thisPrompt.keyword, thisPrompt.explanation);
	}

	levelSimilarityElement.innerHTML = "Similary between you and computer:<br> <strong>"+CalculateLevelSimilarities()+"%</strong>";
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

function AddRowToLevelSummary(yourAnswer, promptText, computerAnswer, exaplanationStr) {
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
	} else if(answerCorrectness === 0.5) {
		row.classList.add("half-correct");
		correctAnswers += CheckComputerAnswerWithKeyword(yourAnswer, computerAnswer);
	}

	row.appendChild(yourTd);
	row.appendChild(promptTd);
	row.appendChild(computerTd);
	levelSummaryTable.appendChild(row);
}

function DeleteLastCharOfInput() {
	let keywordCurrently = keywordElementInput.value+"";
	if(keywordCurrently.length > 0) {
		keywordElementInput.value = keywordCurrently.substring(0, keywordCurrently.length - 1);
	}
}

function CalculateSimilarities() {
	let sim = (correctAnswers/(maxPromptTotal)) * 100;
	return sim.toFixed(2);
}

function CalculateLevelSimilarities() {
	let sim = (correctAnswers/(maxPrompts[currentLevel])) * 100;
	return sim.toFixed(2);
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
		currentLevel = 1;
		ShowSection("gameplay");
		return;
	} else if(activeSection === "level-summary" && e.keyCode == 13) {
		ShowSection("gameplay");
		return;
	} else if(activeSection === "summary" && e.keyCode == 13) {
		ShowSection("highscore");
		return;
	} else if(activeSection === "highscore" && e.keyCode == 13) {
		ShowSection("main-menu");
		return;
	} else if(activeSection !== "gameplay") {
		return;
	}
	
    e = e || window.event;
	
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