"use strict";

var leftOperand = document.getElementById("left-operand");
var operator = document.getElementById("operator");
var rightOperand = document.getElementById("right-operand");

var leftOperandField = [];
var operatorField = [];
var rightOperandField = [];

var operatorClicked = false;


//----------All Numerical Buttons----------

var operandClick = function (event) {
	if (operatorClicked == false) {
		leftOperandField.push(this.innerHTML);
		console.log(leftOperandField);
		var leftOperandString = leftOperandField.join("");
		console.log(leftOperandString);
		var firstField = leftOperand.value = leftOperandString;
	} else {
		rightOperandField.push(this.innerHTML);
		console.log(rightOperandField);
		var rightOperandString = rightOperandField.join("");
		console.log(rightOperandString);
		var lastField = rightOperand.value = rightOperandString;
	};
};

var button = document.getElementsByClassName("operand");
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", operandClick, false);
}

//----------All Operator Buttons----------

var operatorClick = function (event) {
	operatorField.push(this.innerHTML);
	console.log(operatorField);
	var operatorFieldString = operatorField.join('');
	console.log(operatorFieldString);
	var secondField = operator.value = operatorFieldString;
	operatorClicked = true;
}

var operatorButton = document.getElementsByClassName("operator");
for (var i = 0;i < operatorButton.length; i++) {
	operatorButton[i].addEventListener("click", operatorClick, false);
}

//---------"C" Button---------

var clear = function (event) {
	leftOperand.value = "";
	operator.value = "";
	rightOperand.value = "";
	leftOperandField = [];
	operatorField = [];
	rightOperandField = [];
	console.log(leftOperandField, operatorField,rightOperandField);
	operatorClicked = false;
}

var erase = document.getElementById("clear");
erase.addEventListener("click", clear, false);

// ----------Equals Button----------

var total = function(event){
	var total;
	if (operator.value == "/") {
		total = Number(leftOperand.value) / Number(rightOperand.value);
	} else if (operator.value == "*") {
		total = Number(leftOperand.value) * Number(rightOperand.value);
	} else if (operator.value == "-") {
		total = Number(leftOperand.value) - Number(rightOperand.value);
	} else if (operator.value == "+") {
		total = Number(leftOperand.value) + Number(rightOperand.value);
	}
	rightOperand.value = total;
	leftOperand.value = ""
	operator.value = ""
	leftOperandField = [];
	operatorField = [];
	rightOperandField = [];
	operatorClicked = false;
};

var equals = document.getElementById("equals")
equals.addEventListener("click", total, false);

