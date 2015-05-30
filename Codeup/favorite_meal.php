<!DOCTYPE HTML>
	<html>
		<head>
			<title>My Favorite Food</title>
		</head>
		<body>
			<header>
				<h1>Chicken Parmesan</h1>
			</header>
			<main>
				<h2>Ingredients</h2>
				<ol>
					<li>Chicken Breast</li>
					<li>Marinara Sauce</li>
					<li>Pepper</li>
					<li>Salt</li>
					<li>Parmesan Cheese</li>
					<li>Mozzerella Cheese</li>
					<li>Eggs</li>
					<li>Flour</li>
					<li>Spaghetti</li>
				</ol>
				<form method="POST" action="/favorite_meal.php">
					<p>
						<label for="meal_suggestion">Favorite Meal Suggestions</label>
					<p>
						<input id="meal_suggestion" name="meal_suggestion" type="text">
					</p>
					<p>
						<input type="submit" value="Send">
					</p>
				</form>
			</main>
			<aside>
				<h3>Other Foods You May Like</h3>
					<ol>
						<li><a href="#" title="spaghetti and meatballs">Spaghetti & Meatballs</a></li>
						<li><a href="#" title="mozzerella cheese sticks">Mozzerella Cheese Sticks</a></li>
						<li><a href="#" title="chicken fried chicken">Chicken Fried Chicken</a></li>
					</ol>
			</aside>
<?php
	var_dump($_POST)
?>
		</body>
	</html>