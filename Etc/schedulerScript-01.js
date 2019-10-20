
$(document).ready(function () {

  const currentDate = moment().format("dddd,MMMM Do");
  $("#currentDay").html(currentDate);

  var timeOption = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM"];
  // var currentTime = 0;

  // a. function to build scheduler Rows (function buildRows) --> loop, moment.js
  function buildRows() {
    // build HTML elements row

    for (var i = 0; i < timeOption.length; i++) {

        var row = $("<div class='row'>");

        // var timeSpan = $("<span>");
        var time = $("<div>");
        time.attr("data-timeOption", timeOption[i]);
        time.addClass("time");
        time.text(timeOption[i]);
        // row.append(time);
        // <span>  <div data-timeoption="10AM" class="time">9AM</div>  </span>

        // var userInput = $("<span>");
        // userInput.addClass("textSpace");
        
        var scribble = $("<textarea/>");
        scribble.addClass("scribble");

        console.log(localStorage.getItem(timeOption[i])); 
        // getItem  -- gets the contents in the textarea using the key from (timeOption[i])
        // "localStorage.getItem(timeOption[i])" -- get the value stored before, and print it out on console
        var storageItem = localStorage.getItem(timeOption[i]);
        //If store item is not null, pass the storageItem
        if (storageItem !== null) {
            scribble.val(storageItem);          
        }
        
        // row.append(scribble);
        // <span class="textSpace">  <textarea class="scribble" id=startTime></textarea>  </span>

        var saveBtn = $("<button>");
        saveBtn.addClass("add");
        // var saveBtn = $("<span>");
        // saveBtn.append(button);
        // <button class="add"> </button>

        row.append(time);
        row.append(scribble)
        row.append(saveBtn)
        $(".container").append(row);
    }
    
    // console.log("test");


    // c. Save button event handler (function saveRow) --> uses localstorage    

    $(".add").on("click",
      function (event) {
        event.preventDefault();        

        // console.log($(this).parent().find(".scribble");
        // console.log($(this).parent().find(".scribble").val());
        // Find out what's in the console when you press the button

        var userInput = $(this).parent().find(".scribble").val();

        // console.log($(this).parent());
        // console.log($(this).parent()[0]);
        // console.log($(this).parent()[0].innerText);
        // Find out what would be the key(innerText) as a key.   

        var eventKey = $(this).parent()[0].innerText;
        localStorage.setItem(eventKey, userInput);
        
        // console - application - put something and I can see that



        // var contents = $(".scribble").val();  
        // localStorage.setItem("todo", JSON.stringify(contents));  
        // $(this).siblings(".textSpace").val(value);
        // // event();

        // var aa = JSON.parse(localStorage.getItem("todo"));
        //  $(this).sibling(".textSpace").val(aa);
      });
  }
 
 
    buildRows();


    

    

  // b. Set date at top of page (function showTodaysDate) --> moment.js
  // function showTodaysDate() {

  // }

  // d. Change row styles (function updateRowStyle) --> moment.js
  // function updateRowStyle() {

  //   // i. on page load, check current time (hour) against rows in scheduler
  //   // ii. update style for those that are past hours, present hour, future hours
  // }

  


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
// lsOutput.innerHTML = '${key}: ${value}<br />'  ;`