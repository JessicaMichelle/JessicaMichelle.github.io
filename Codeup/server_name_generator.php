<?php 
	$adjectives = [
		'Hideous',
		'Smart',
		'Defamatory',
		'Heuristic',
		'Incendiary',
		'Judicious',
		'Obnoxious',
		'Serpentine',
		'Tenacious',
		'Baleful'
	];

	$nouns = [
	'Tissue',
	'Cluster',
	'Mute',
	'Ostentation',
	'Beans',
	'Ponies',
	'Summoner',
	'Harlot',
	'Hussy',
	'Table'
	];

	$adjIndex = array_rand($adjectives);
	$nounIndex = array_rand($nouns);
?>

<!DOCTYPE HTML>
<html>
	<style type="text/css">
		/*----------BORDER BOX----------*/
		html {
			box-sizing: border-box;
		}
		*, *:before, *:after {
			box-sizing: inherit;
		}

		/*----------ELEMENTS----------*/
		
		body {
			background-image: url(img/starring.png);
		}

		h1 {
			text-align: center;
			margin-top: 50px;
			margin-bottom: 50px;
			color: white;
		}


		/*-----------CLASSES-----------*/

		.wrapper {
			text-align: center;
		}

		.button {
			position: relative;
			top: 50%;
			font-size: 18px;
			width: 150px;
		}

		/*----------RESPONSIVE DESIGN----------*/

	/*	@media screen and (min-width:550px) {
		    div {
		        width: 30%;
		    }
		}

		@media screen and (min-width:550px) {
		     {
		        width: 50%;
		    }
		}

		@media screen and (min-width:900px) {
		    div {
		        width: 100%;
		    }
		}*/

	</style>
	<head>
		<title>Server Name Generator</title>
	</head>
	<body>
		<h1>Your Random Server Name Is:</h1>
		<h1><?php echo $adjectives[$adjIndex] ?>
		<?php echo $nouns[$nounIndex] ?></h1>

		<div class="wrapper">
			<button class="button" onclick="reloadPage()">Generate New Server Name</button>
		<div>

		<script type="text/javascript">
			function reloadPage() {
			    location.reload();
			}
		</script>
	</body>
</html>