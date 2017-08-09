(function() {
  var questions = [{
    question:"Right now in Japan there is 8.05 million girls",
    choices: [Truth, Myth]
    correctAnswer: 2
  }];
  var questionCounter = 0;
  var selections = [];
  var quiz = $(#'quiz');

  displayNext();

  $('#next').on('click', function (e) {
    e.preventDefault();
    if(quiz.is(':animated')){
      return false;
    }
    choose();
    if(isNaN(selections[questionCounter])){
      alert('Please make a selection!');
    }else {
      questionCounter++;
      displayNext();
    }
  });
  $('#prev').on('click',function(e){
    e.preventDefault();
  }
