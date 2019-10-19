
$(document).ready(function(){

  const currentDate = moment().format("dddd,MMMM Do");
  $("#currentDay").html(currentDate);

  var timeOption = ["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];  
  // var currentTime = 0;

  // a. function to build scheduler Rows (function buildRows) --> loop, moment.js
  function buildRows(firstRow) {
    // build HTML elements row

    for (var i = 0; i < timeOption.length; i++){

        var row = $("<div class='row'>");

        var time = $("<div>");
        time.attr("data-timeOption", timeOption[i]);
        time.text(timeOption[i]);
        // time.addclass(timeClass);
        var timeSpan = $("<span>");
        timeSpan.append(time);
        // $("#aa").append(time);

      /*   var scribble = $("<div>").html();
        scribble.attr(textarea, "<textarea/>");
        $("#bb").append(scribble); */

        var scribble = $("<textarea/>");
        var userInput = $("<span>");
        userInput.append(scribble);
        // $("#bb").append(scribble); 

        var button = $("<button>");
        var saveBtn = $("<span>");
        saveBtn.append(button);
        // $("#cc").append(button); 
        row.append(timeSpan,userInput,saveBtn);
        $(".container").append(row);
  }
  }

  // b. Set date at top of page (function showTodaysDate) --> moment.js
  function showTodaysDate() {

  }

  // c. Save button event handler (function saveRow) --> uses localstorage
  function saveRow() {
    console.log(acea);
    /*   $("saveBtn").click(
        function(){

        var contents = $("userInput").val();
        localStorage.setItem("setValue", JSON.stringify(contents));

        var value = JSON.parse(localStorage.getItem("setValue"));        
        // userInput.innerHTML = value;
      }) */
  }

  // d. Change row styles (function updateRowStyle) --> moment.js
  function updateRowStyle() {

    // i. on page load, check current time (hour) against rows in scheduler
    // ii. update style for those that are past hours, present hour, future hours
  }

buildRows();
// saveRow();

/* 
var emailInput = document.querySelector("#email");        
var userEmailSpan = document.querySelector("#user-email");
var signUpButton = document.querySelector("#sign-up


 function renderLastRegistered(
     var aa = localStorage.getItem("email");
     userEmailSpan.textContent = aa;
     // console.log(aa);
 }s

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


// const key = inputKey.value;
// localStorage.setItem(key);
// const value = localStorage.getItem(key);
// lsOutput.innerHTML = '${key}: ${value}<br />'  ;