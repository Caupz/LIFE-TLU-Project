let promptTexts = [
	{id:0, question:"Some text about quizis", keyword:"quiz"},
	{id:1, question:"Some text about surveys", keyword:"survey"},
	{id:2, question:"Some text about experiments", keyword:"experiment"},
	{id:3, question:"Some text about interviews", keyword:"interview"},
	{id:4, question:"Some text about case studies", keyword:"case study"},
	{id:5, question:"Some text about observations", keyword:"observation"},
];
let promptsInserted = 0;
let activePrompts = [];
let insertedKeywords = [];
let maxPrompts = 5;
let activePrompt = null;
let activeSection = "";

// TODO kui question on http algusega link, siis tehakse image
// TODO KEYBOARD nupud mappida kui gameplay active
// TODO Enter button listener vajutab insertedKeyword kui gameplay active
// TODO Summary page
// TODO insert keyword buttonile curosr:pointer

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
	promptsInserted = -1;
	activePrompts = GetRandomItemsFrom(promptTexts, 5);
	SetNewToActivePrompt();
	console.log(activePrompt);
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
	SetMaxPromptLabel();
	
	console.log("GAME STARTED");
	console.log("PROMPTS: ", activePrompts);
}

function SetCurrentPromptLabel() {
	document.querySelector("#current-prompt").innerText = (promptsInserted + 1);
}

function SetMaxPromptLabel() {
	document.querySelector("#max-prompt").innerText = maxPrompts;
}

function SetActiveTextToPrompt() {
	document.querySelector("#prompt-text").innerText = activePrompt.question;
}

function SetNewToActivePrompt() {
	promptsInserted++;
	activePrompt = activePrompts[promptsInserted];
	SetCurrentPromptLabel();
}

function SetToAnswers(keyword) {
	insertedKeywords.push({id:activePrompt.id, keyword:keyword});
}

function InsertKeyword() {
	let keywordElement = document.querySelector("#keyword");
	let keywordValue = keywordElement.value;
	SetToAnswers(keywordValue);
	keywordElement.value = "";
	SetNewToActivePrompt();
	
	if(promptsInserted >= maxPrompts) {
		ShowSection("summary");
		return;
	}
	
	SetActiveTextToPrompt();
	SetCurrentPromptLabel();
}

function ShowSummary() {
	console.log("SUMMARY");
	console.log("Inserted keywords: "+promptsInserted);
	console.log("Insrted keyword data: ", insertedKeywords);
	
	// todo mõelda välja kuidas
	
	/* todo nullida 
		promptsInserted, 
		activePrompts = [], 
		insertedKeywords = []
	*/
}