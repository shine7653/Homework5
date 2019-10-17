
$(document).ready(function(){
  
  $("#currentDay").html("Hello world~~~~~~~");

/*   var current = $("moment().format('MMMM Do YYYY, h:mm:ss a')");
  $("#currentDay").append(current);  */

  console.log("screwbge");

  var timeOption = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];

  // for (var i = 0; i < timeOption.length; i++){
    
/*     var question = document.createElement("h1");
    //console.log(questions);
    question.textContent = questions[quesIndex].title;
    arrayQues.appendChild(question);
  
    // Set the choices
    for (var i = 0; i < questions[quesIndex].choices.length ; i++) {
      var button = document.createElement("button");
      button.textContent = questions[quesIndex].choices[i];
      arrayQues.appendChild(button); */
  
/* }); */

// a. function to build scheduler Rows (function buildRows) --> loop, moment.js
function buildRows() {
  // build HTML elements row
  // TODO - finish
}
  var time = $("<div>");
  time.attr("data-timeOption", timeOption[0]);
  time.text(timeOption[0]);
  $("#aa").append(time);

/*   var scribble = $("<div>").html();
  scribble.attr(textarea, "<textarea/>");
  $("#bb").append(scribble); */

  var scribble = $("<textarea/>");
  $("#bb").append(scribble); 
  
  var button = $("<button>");
  $("#cc").append(button);

// b. Set date at top of page (function showTodaysDate) --> moment.js
function showTodaysDate() {
  // TODO - finish
}
// c. Save button event handler (function saveRow) --> uses localstorage
function saveRow() {
  // TODO - finish
}
// d. Change row styles (function updateRowStyle) --> moment.js
function updateRowStyle() {
  // TODO - finish
  // i. on page load, check current time (hour) against rows in scheduler
  // ii. update style for those that are past hours, present hour, future hours
}
buildRows();


/* 
var emailInput = document.querySelector("#email");        
var userEmailSpan = document.querySelector("#user-email");
var signUpButton = document.querySelector("#sign-up


 function renderLastRegistered(
     var aa = localStorage.getItem("email");
     userEmailSpan.textContent = aa;
     // console.log(aa);
 }

  signUpButton.addEventListener("click", 
      function (event) {
          event.preventDefault();
          var aa = emailInput.value;
          // console.log(aa);
          /* if (aa === "") {
             
          } */
      /*     localStorage.setItem("email", aa);
          renderLastRegistered();
      });
 */ 

});
