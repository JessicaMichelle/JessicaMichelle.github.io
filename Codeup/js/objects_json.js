"use script";

var library = [
	{
		"title": "Harry Potter And The Sorcers Stone",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 1997
	},
	{
		"title": "Harry Potter And The Chamber Of Secrets",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 1998
	},
	{
		"title": "Harry Potter And The Prisoner Of Azkaban",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 1999
	},
	{
		"title": "Harry Potter And The Goblet Of Fire",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 2000
	},
	{
		"title": "Harry Potter And The Order Of The Phoenix",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 2003
	},
	{
		"title": "Harry Potter And The Half-Blooded Prince",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 2005
	},
	{
		"title": "Harry Potter And The Deathly Hallows",
		"author": {
			"firstName": "J.K.",
			"lastName": "Rowling"
		},
		"year": 2007
	}
]

// console.log(books);

library.forEach(function (books, index){

	console.log("Book #" + (index + 1));
	console.log("Title: " + books.title);
	console.log("Author: " + books.author.firstName + " " + books.author.lastName);
	console.log("Year: " + books.year);
	console.log("----------");
});