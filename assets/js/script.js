var currentDay = dayjs().format("dddd, MMMM D YYYY");
var descriptionEl;

$("#currentDay").text(currentDay);

$(function () {

  // add event listeners for each of the buttons
$(".saveBtn").each(function() {
  this.addEventListener("click", saveText);
})

//one function to rule all buttons and save the text to local storage with the id key
function saveText(){
  descriptionEl = $(this.parentNode.querySelector('textarea')).val();
  localStorage.setItem(this.parentNode.id, descriptionEl);
}

  //loop through each time block to compare the hour in the id to the current hour and assign past/present/future class accordingly
  $('.time-block').each(function() {
    var blockId = this.id;
    var hourId = blockId.split('-');
    var blockHour = hourId[1];
    var currentHour = dayjs().hour();
    //currentHour = 10; //comment out above line and use this line for testing different hours
    //console.log("block hour: "+blockHour+ " current hour: "+currentHour)
    if (blockHour == currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else if (blockHour < currentHour) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
    } else if (blockHour > currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  })

  //storageKey array for iterating through the keys in local storage
  var storageKeys = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"]
  function loadText(){
    $('.time-block').each(function(){
      for (var i=0; i<storageKeys.length; i++) {
        if (this.id == storageKeys[i]) {
          var textBox = $(this.querySelector('textarea'));
          textBox.text(localStorage.getItem(storageKeys[i]));
        }
      }
    })
  }

  //load any text from local storage upon loading the page
  loadText();
  
});
