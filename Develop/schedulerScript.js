
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

        var timeSpan = $("<span>");
        var time = $("<div>");
        time.attr("data-timeOption", timeOption[i]);
        time.addClass("time");
        time.text(timeOption[i]);        
        timeSpan.append(time);
        // <span>  <div data-timeoption="10AM" class="time">9AM</div>  </span>
        
        var userInput = $("<span>");
        userInput.addClass("textSpace");
        var scribble = $("<textarea/>");
        scribble.addClass("scribble");        
        userInput.append(scribble);
        // <span class="textSpace">  <textarea class="scribble" id=startTime></textarea>  </span>

        var saveBtn = $("<button>");
        saveBtn.addClass("button");
        // var saveBtn = $("<span>");
        // saveBtn.append(button);
        // <button class="button"> </button>

        row.append(timeSpan,userInput,saveBtn);
        $(".container").append(row);
  }
  }

  // b. Set date at top of page (function showTodaysDate) --> moment.js
  function showTodaysDate() {

  }

  // c. Save button event handler (function saveRow) --> uses localstorage
  function saveRow() {

      $("saveBtn").click(
        function(){
          event.preventDefault();
         
          var contents = $(".scribble").val();
          
          localStorage.setItem("setValue", JSON.stringify(contents));
           
          var value = JSON.parse(localStorage.getItem("setValue"));      
           
          userInput.innerHTML = value;
         
          console.log("test"); 
      }) 
  }

  // d. Change row styles (function updateRowStyle) --> moment.js
  function updateRowStyle() {

    // i. on page load, check current time (hour) against rows in scheduler
    // ii. update style for those that are past hours, present hour, future hours
  }

buildRows();
saveRow();

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