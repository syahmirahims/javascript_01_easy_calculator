// never memorize but always refer the documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://api.jquery.com/
// https://www.learnenough.com/command-line-tutorial

// $("h1") ---> document.querySelector("h1") or document.querySelectorAll("h1")
// .css("color", "white") ---> taps into CSS property to change color to white
// .css("property", "setting")
$("h1").css("color", "white");

// .addClass ---> adding class to the selected element
$("h1").addClass("title");

// $("button.1") ---> selecting the button that has class=1
// .text ---> basically changes the text by tapping into .innerHTML
$("button.1").text("Calculator");

// .attr("href") ---> only gets the value
// .attr("href", "hello.html") ---> sets the value to hello.html
// this applies to most properties
$("a").attr("href", "hello.html");

// this adds event listener that listens to the click to return the callback function
// in jQuery, event listener can be added simply using methods below
//  example: .click(function) or .keypress(function) or .dblclick(function)
$("button.3").click(function(){
    $("h1").css("font-family", "times")
});

// this adds events listener that detects key presses
// returns the callback function that changes the text
// text changes to what key the document detects
$(document).keypress(function(event){
    $("button.4").text(event.key);
});

// another way to add event listener is using .on
// works the same way as .addEventListener by adding 2 parameters
$("button.5").on("dblclick", function(){
    $("button.5").css("background-color", "red");
    $("button.5").css("color", "white");
});