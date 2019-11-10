
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

        var time = $("<div>");
        time.attr("data-timeOption", timeOption[i]);
        time.addClass("time");
        time.text(timeOption[i]);
        
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

        var saveBtn = $("<button>");
        saveBtn.addClass("add");

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

      });
  }
 
 
    buildRows();

});
