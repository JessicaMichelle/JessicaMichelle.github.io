<?php
	var_dump($_POST);
?>
<!DOCTYPE html>
<html>
	<head>
		<title>My First HTML Form</title>
	</head>
	<body>
		<h1>User Login</h1>
		<form method="POST" action="/my_first_form.php">
			<p>
				<label for="username">Username</label>
				<input id="username" name="username" type="text" placeholder="Enter Username">
			</p>
			<p>
				<label for="password">Password</label>
				<input id="password" name="password" type="password" placeholder="Enter Password">
			</p>
			<p>
				<button type="submit">Login</button>
			</p>
		</form>
		<h1>Compose An Email</h1>
		<form method="POST" action="/my_first_form.php">
			<p>
				<label for="from">From:</label>
				<input id="from" name="from" type="text">
			</p>
			<p>
				<label for="to">To:</label>
				<input id="to" name="to" type="text">
			</p>
			<p>
				<textarea id="email_body" name="email_body" rows="10" cols="100" placeholder="Message"></textarea>
			</p>
			<p>
				<label for="save_to_sent"></label>
				<input type="checkbox" name="save_to_sent" value="yes">Save a copy to your sent folder
			</p>
			<button type="submit">Send</button>
		</form>
		<h1>Multiple Choice Test</h1>
		<form method="POST" action="/my_first_form.php">
			<p>What is the first letter of the alphabet?</p>
				<p>
					<label>
						<input type="radio" name="q1" value="A">
						A
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name="q1" value="B">
						B
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name="q1" value="C">
						C
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name="q1" value="D">
						D
					</label>
				</p>
			<p>What color is the stupid dress?</p>
				<p>
					<label>
						<input type="radio" name="q2" value="black_and_blue">
						Black & Blue
					</label>
				</p>
				<p>
					<label>
						<input type="radio" name="q2" value="white_and_gold">
						White & Gold
					</label>
				</p>
				<p>
					<label for="hatred">On a scale of 1 to 10, how much does that question make you want to punch someone?</label>	
						<br><select id="hatred" name="hatred">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
						</select>
				</p>	
				<p>What are your favorite colors?</p>
				<p>
					<label><input type="checkbox" value="1" name="red">Red</label>
					<br><label><input type="checkbox" value="2" name="green">Green</label>
					<br><label><input type="checkbox" value="3" name="yellow">Yellow</label>
					<br><label><input type="checkbox" value="4" name="blue">Blue</label>
					<br><label><input type="checkbox" value="5" name="purple">Purple</label>
				</p>
				<button type="submit">Submit</button>
		</form>
		<h1>Select Testing</h1>
		<form method="POST" action="/my_first_form.php"> 
			<label for="testing">Do you actually want to take a test?</label>
			<select id="testing" name="testing">
				<option value="1">Yes</option>
				<option value="0" selected>No</option>
			</select>
			<p>
				<button type="submit">Submit</button>
			</p>
		</form>
	</body>
</html>
