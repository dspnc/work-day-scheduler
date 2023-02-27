var currentDay = dayjs().format("dddd, MMMM D YYYY");
var saveBtn9El = $('#saveBtn9');
var saveBtn10El = $('#saveBtn10')
var saveBtn11El = $('#saveBtn11')
var saveBtn12El = $('#saveBtn12')
var saveBtn13El = $('#saveBtn13')
var saveBtn14El = $('#saveBtn14')
var saveBtn15El = $('#saveBtn15')
var saveBtn16El = $('#saveBtn16')
var saveBtn17El = $('#saveBtn17')

var text9El = $('#text9');
var text10El = $('#text10');
var text11El = $('#text11')
var text12El = $('#text12')
var text13El = $('#text13')
var text14El = $('#text14')
var text15El = $('#text15')
var text16El = $('#text16')
var text17El = $('#text17')

var descriptionEl;

$("#currentDay").text(currentDay);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // add event listeners for the buttons
  saveBtn9El.on("click", saveText9);
  saveBtn10El.on("click", saveText10);
  saveBtn11El.on("click", saveText11);
  saveBtn12El.on("click", saveText12);
  saveBtn13El.on("click", saveText13);
  saveBtn14El.on("click", saveText14);
  saveBtn15El.on("click", saveText15);
  saveBtn16El.on("click", saveText16);
  saveBtn17El.on("click", saveText17);


//save text values to local storage
  function saveText9(){
    descriptionEl = text9El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText10(){
    descriptionEl = text10El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText11(){
    descriptionEl = text11El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText12(){
    descriptionEl = text12El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText13(){
    descriptionEl = text13El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText14(){
    descriptionEl = text14El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText15(){
    descriptionEl = text15El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText16(){
    descriptionEl = text16El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText17(){
    descriptionEl = text17El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  //loop through each time block to compare the hour in the id to the current hour and assign past/present/future class accordingly
  $('.time-block').each(function() {
    var blockId = this.id;
    var hourId = blockId.split('-');
    var blockHour = hourId[1];
    var currentHour = dayjs().hour();
    //currentHour = 14; //comment out above line and use this line for testing different hours
    //console.log("block hour: "+blockHour+ " current hour: "+currentHour)
    if (blockHour == currentHour) {
      $(this).removeClass('past')
      $(this).removeClass('future')
      $(this).addClass('present')
    } else if (blockHour < currentHour) {
      $(this).removeClass('present')
      $(this).removeClass('future')
      $(this).addClass('past')
    } else if (blockHour > currentHour) {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
  })

  //storageKey array for iterating through the keys in local storage
  var storageKeys = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"]
  function loadText(){
    $('.time-block').each(function(){
      for (var i=0; i<storageKeys.length; i++) {
        if (this.id == storageKeys[i]) {
          var textBox = $(this.querySelector('textarea'))
          textBox.text(localStorage.getItem(storageKeys[i]))
        }
      }
    })

  
  }

  //load any text from local storage upon loading the page
  loadText();
  
});
