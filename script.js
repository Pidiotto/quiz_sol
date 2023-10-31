import questions from './perguntas.js';

let currentQuestion = 0;
let score = 0;
let questionsToAsk = 5;

const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const scoreDisplay = document.getElementById("score");
const questionText = document.getElementById("question-text");
const trueButton = document.getElementById("true-button");
const falseButton = document.getElementById("false-button");
const nextButton = document.getElementById("next-button"); // Novo botão "Próxima Pergunta"
const restartButton = document.getElementById("restart-button");
const scoreMessage = document.getElementById("score-message");
const explanationText = document.getElementById("explanation-text");

let shuffledQuestions = [];
let quizFinished = false;

function shuffleQuestions() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    if (currentQuestion < questionsToAsk) {
        quizContainer.style.display = "block";
        startButton.style.display = "none";
        questionText.textContent = shuffledQuestions[currentQuestion].question;
        explanationText.textContent = '';
        nextButton.style.display = "none"; // Oculta o botão "Próxima Pergunta" ao mostrar a pergunta
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizFinished = true;
    quizContainer.style.display = "none";
    scoreDisplay.textContent = score;
    scoreMessage.style.display = "block";
    restartButton.style.display = "block";
    startButton.style.display = "none";
    explanationText.textContent = '';
    nextButton.style.display = "none"; // Oculta o botão "Próxima Pergunta" ao finalizar o quiz
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizFinished = false;
    shuffleQuestions();
    displayQuestion();
    scoreDisplay.textContent = score;
    scoreMessage.style.display = "none";
    restartButton.style.display = "none";
}

startButton.addEventListener("click", () => {
    shuffleQuestions();
    displayQuestion();
});

restartButton.addEventListener("click", () => {
    restartQuiz();
});

trueButton.addEventListener("click", () => {
    if (!quizFinished) {
        checkAnswer(true);
    }
});

falseButton.addEventListener("click", () => {
    if (!quizFinished) {
        checkAnswer(false);
    }
});

nextButton.addEventListener("click", () => {
    currentQuestion++;
    displayQuestion();
});

function checkAnswer(userAnswer) {
    if (userAnswer === shuffledQuestions[currentQuestion].answer) {
        score++;
    }
    displayExplanation(userAnswer);
}

function displayExplanation(userAnswer) {
    const correctExplanation = shuffledQuestions[currentQuestion].explanation.correct;
    const incorrectExplanation = shuffledQuestions[currentQuestion].explanation.incorrect;
    const explanation = userAnswer === shuffledQuestions[currentQuestion].answer ? correctExplanation : incorrectExplanation;

    explanationText.textContent = explanation;
    nextButton.style.display = "block"; // Exibe o botão "Próxima Pergunta" após mostrar a explicação
}
