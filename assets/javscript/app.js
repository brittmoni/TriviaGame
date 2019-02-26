/*
  $('button').on('click', function() {
    switch to index.html
  })
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
var userGuess;

var correctAnswer;

var wins;

var losses;

var timeLeft = 45;

var count = setInterval(decreaseTime, 1000);

function decreaseTime(){
  timeLeft--;

  if (timeLeft === 0) {
    window.location.href = 'results.html';
  }
}

var $timeDiv = $('<div>').addClass('time-left').html('<h3>Time Left: ' + timeLeft + ' seconds</h3>');
  $('body').prepend($timeDiv);

  /*
  if(answers === userGuess){
    increment wins by one
  } else {
    increment losses by one
  }

  var $results = $('<div>');

  var $correct = $('<p>').text('Correct: ' + wins);

  var $incorrect = $('<p>).text('Incorrect: ' + losses);

  $results.append($correct, $incorrect);
  
  $('body').append($results);
  */
