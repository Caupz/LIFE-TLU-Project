 <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>LIFE Project - Bureau</title>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="main.js" defer></script> 
</head>

<body>
<?php 
$keyboard = [
0 => ["Q","W","E","R","T","Y","U","I","O","P"],
1 => ["A","S","D","F","G","H","J","K","L",],
2 => ["Z","X","C","V","B","N","M",],
];

?>
<div class="container">

<section id="main-menu" class="active">
	<h1>LIFE Project: Bureau</h1>
	<p class="description">
		This game is for learning research methods which can be used in Case study. This game will be useful for higher education students(Bachelor, Master). 
		Game has 5 Levels (one per every case study)  every Level has 3 prompts, each prompt 1 task (case study pieces of evidences: data set, text, pictures).
	</p>
	<div class="buttons">
		<button onclick="ShowSection('gameplay')">Play</button>
	</div>
	<p class="creators">
		<table>
			<tr><td>Caupo Helvik</td><td>Developer</td></tr>
			<tr><td>Martin Paluoja</td><td>Researcher</td></tr>
			<tr><td>Iuliia Paramonova</td><td>Project Manager</td></tr>
			<tr><td>Stas Galeev</td><td>Researcher</td></tr>
			<tr><td>Jonathan Bekong</td><td>Designer</td></tr>
		</table>
	</p>
</section>

<section id="gameplay">
	<h2>Please insert the keyword to the input <span id="current-prompt"></span>/<span id="max-prompt"></span></h2>
	<div class="prompt-container">
		<p id="prompt-text">Error on setting prompt!</p>
		<p id="error-notifier"></p>
	</div>
	<div class="keyword-container">
		<input id="keyword" placeholder="Insert keyword... (e.g. Corona)" />
		<button id="enter" onclick="InsertKeyword()"><p>✅</p></button>
	</div>
	<div class="keyboard-container">
		<?php foreach($keyboard as $keyrow): ?>
			<?php foreach($keyrow as $letter): ?>
				<button id="letter-<?= $letter ?>" onclick="KeyPressed('<?= $letter ?>')" class="letter" data-letter="<?= $letter ?>"><?= $letter ?></button>
			<?php endforeach; ?>
			<br>
		<?php endforeach; ?>
		<br>
		<button id="letter-space" onclick="KeyPressed('space')" class="letter" data-letter="space">_</button>
	</div>
</section>

<section id="summary">
	<h2>Summary</h2>
	<div class="end-content">
		<table id="results">
		</table>
	</div>
	<button onclick="ShowSection('main-menu')">Back to Main Menu</button>
</section>

</div>
<button id="dummy-btn"></button>
</body>

</html> 