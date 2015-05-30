
"use strict";

var mainHeader = document.getElementById("main-header");
var subHeader = document.getElementById("sub-header");
var listItems = document.getElementsByTagName("li");
var subParagraphs = document.getElementsByClassName("sub-paragraph");

var btn1 = document.getElementById("header-chg");
var btn2 = document.getElementById("subhead-chg");
var btn3 = document.getElementById("alt-li");
var btn4 = document.getElementById("subpar-change");
var btn5 = document.getElementById("revert");
var btn6 = document.getElementById("remover");

var listener1 = function (e) {
    mainHeader.innerHTML = "JavaScript Is Cool!";
    console.log("Main header has been changed.");
}
var listener2 = function (e) {
    subHeader.style["color"] = "blue";
    console.log("Sub-header has been changed.");
}
var listener3 = function (e){
    for (var i = 0; i < listItems.length; i++) {
        if (i % 2 != 0) {
            listItems[i].style["color"] = "#ddd";
        };
        var dbid = listItems[i].attributes["data-dbid"].value;
        
        if (dbid == "1") {
            listItems[i].style["color"] = "blue";
        }
    }
    console.log("List items have been changed.");
}
var listener4 = function (e){
    subParagraphs[0].innerHTML = "Mission Accomplished!";
    console.log("Sub-paragraph has been changed.");
}
var revert = function (e){
    mainHeader.innerHTML = "Hello World!";
    subHeader.style["color"] = "#000";
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].style["color"] = "#000";
    }
    subParagraphs[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    console.log("All changes have been reverted.");
}
var remover = function (e) {
    btn1.removeEventListener("click", listener1, false);
    btn2.removeEventListener("click", listener2, false);
    btn3.removeEventListener("click", listener3, false);
    btn4.removeEventListener("click", listener4, false);
    btn5.removeEventListener("click", revert, false);
    console.log("Event listener removed for all buttons.");
}

btn1.addEventListener("click", listener1, false);
btn2.addEventListener("click", listener2, false);
btn3.addEventListener("click", listener3, false);
btn4.addEventListener("click", listener4, false);
btn5.addEventListener("click", revert, false);
btn6.addEventListener("click", remover, false);



// ----------ORIGINAL EXERCISE----------

// todo: get the main header element by id
// var mainHeader = ;

// var mainHeader = document.getElementById("main-header");

// todo: set inner html of mainHeader to "JavaScript is Cool"

// mainHeader.innerHTML = "JavaScript Is Cool!";

// todo: get the sub header element by id
// var subHeader = ;

// var subHeader = document.getElementById("sub-header");

// todo: set the text color of subHeader to blue

// subHeader.style["color"] = "blue";

// todo: get all list items
// var listItems = ;

// var listItems = document.getElementsByTagName("li");

// todo: set text color on every other list item to grey

// for (var i = 0; i < listItems.length; i++) {
//     if (i % 2 != 0) {
//         listItems[i].style["color"] = "#ddd";
//     };
//     var dbid = listItems[i].attributes["data-dbid"].value;
    
//     if (dbid == "1") {
//         listItems[i].style["color"] = "blue";
//     }
// };

// todo: set text color of li with dbid = 1 to blue

// todo: get all elements with class name sub-paragraph
// var subParagraphs = ;

// var subParagraphs = document.getElementsByClassName("sub-paragraph");

// todo: change the text in the first sub paragraph to "Mission Accomplished!"

// subParagraphs[0].innerHTML = "Mission Accomplished!";