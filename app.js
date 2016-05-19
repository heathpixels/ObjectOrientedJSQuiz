//Question creation.
var questions = [
  new Question("Who make the premium electric car?", ["Tesla", "Toyota"], "Tesla"),
  new Question("How much wood would a woodchuck chuck?", ["All the wood!", "Why have wood when there's cake?"], "Why have wood when there's cake?")
];

//Quiz creation
var quiz = new Quiz(questions);

//Show quiz
QuizUI.displayNext();