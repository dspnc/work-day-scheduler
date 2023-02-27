var currentDay = dayjs().format("dddd, MMMM D YYYY");
var saveBtn9El = $('#saveBtn9');
var saveBtn10El = $('#saveBtn10')
var saveBtn11El = $('#saveBtn11')
var saveBtn12El = $('#saveBtn12')
var saveBtn1El = $('#saveBtn1')
var saveBtn2El = $('#saveBtn2')
var saveBtn3El = $('#saveBtn3')
var saveBtn4El = $('#saveBtn4')
var saveBtn5El = $('#saveBtn5')

var text9El = $('#text9');
var text10El = $('#text10');
var text11El = $('#text11')
var text12El = $('#text12')
var text1El = $('#text1')
var text2El = $('#text2')
var text3El = $('#text3')
var text4El = $('#text4')
var text5El = $('#text5')

var descriptionEl;

$("#currentDay").text(currentDay);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn9El.on("click", saveText9);
  saveBtn10El.on("click", saveText10);
  saveBtn11El.on("click", saveText11);
  saveBtn12El.on("click", saveText12);
  saveBtn1El.on("click", saveText1);
  saveBtn2El.on("click", saveText2);
  saveBtn3El.on("click", saveText3);
  saveBtn4El.on("click", saveText4);
  saveBtn5El.on("click", saveText5);





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

  function saveText1(){
    descriptionEl = text1El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText2(){
    descriptionEl = text2El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText3(){
    descriptionEl = text3El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText4(){
    descriptionEl = text4El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  function saveText5(){
    descriptionEl = text5El.val();
    console.log(descriptionEl)
    localStorage.setItem(this.parentNode.id, descriptionEl)
  }

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
