/*
  Create a variable that counts down the time
  Set countdown variable to decrement by seconds
  Prepend the countdown to the trivia webpage
  Once the countdown hits 0, display the results webpage
  Set the answers
  if(answers === userGuess){
    increment wins by one
  } else {
    increment losses by one
  }
  On results page, display total correct and incorrect answers
*/

var timeLeft = 45;

function decreaseTime(){
  timeLeft--;

  //if (timeLeft === 0) {

  //}
}

var $timeDiv = $('<div>').addClass('time-left').html('<h3>Time Left: ' + timeLeft + ' seconds</h3>');
  $('body').prepend($timeDiv);
