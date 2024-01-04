const data = [
    {
        id: 1,
        question: "What is the state capital of Alabama?",
        answers: [
            { answer: "Birmingham", isCorrect: false },
            { answer: "Montgomery", isCorrect: true },
            { answer: "Huntsville", isCorrect: false },
            { answer: "Mobile", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "What is the state capital of Alaska?",
        answers: [
            { answer: "Juneau", isCorrect: true },
            { answer: "Anchorage", isCorrect: false },
            { answer: "Fairbanks", isCorrect: false },
            { answer: "Sitka", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "What is the state capital of Arizona?",
        answers: [
            { answer: "Tucson", isCorrect: false },
            { answer: "Mesa", isCorrect: false },
            { answer: "Phoenix", isCorrect: true },
            { answer: "Scottsdale", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "What is the state capital of Arkansas?",
        answers: [
            { answer: "Fayetteville", isCorrect: false },
            { answer: "Little Rock", isCorrect: true },
            { answer: "Fort Smith ", isCorrect: false },
            { answer: "Springdale", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "What is the state capital of California?",
        answers: [
            { answer: "San Franscisco", isCorrect: false },
            { answer: "Sacramento", isCorrect: true },
            { answer: "Los Angeles ", isCorrect: false },
            { answer: "San Diego", isCorrect: false },
        ],
    },
    {
        id: 6,
        question: "What is the state capital of Colorado?",
        answers: [
            { answer: "Colorado Springs", isCorrect: false },
            { answer: "Aurora", isCorrect: false },
            { answer: "Denver ", isCorrect: true },
            { answer: "Fort Collins", isCorrect: false },
        ],
    },
    {
        id: 7,
        question: "What is the state capital of Connecticut?",
        answers: [
            { answer: "Hartford", isCorrect: true },
            { answer: "New Haven", isCorrect: false },
            { answer: "Stamford ", isCorrect: false },
            { answer: "Bridgeport", isCorrect: false },
        ],
    },
    {
        id: 8,
        question: "What is the state capital of Delaware?",
        answers: [
            { answer: "Wilmington", isCorrect: false },
            { answer: "Dover", isCorrect: true },
            { answer: "Newark ", isCorrect: false },
            { answer: "Milford", isCorrect: false },
        ],
    },
    {
        id: 9,
        question: "What is the state capital of Kansas?",
        answers: [
            { answer: "Wichita", isCorrect: false },
            { answer: "Overland park", isCorrect: false },
            { answer: "Kansas City ", isCorrect: false },
            { answer: "Topeka", isCorrect: true },
        ],
    },
    {
        id: 10,
        question: "What is the state capital of New York?",
        answers: [
            { answer: "New York", isCorrect: false },
            { answer: "Albany", isCorrect: true },
            { answer: "Syracuse ", isCorrect: false },
            { answer: "Rochester", isCorrect: false },
        ],
    }
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");


let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;


const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
};

play.addEventListener("click",() => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
});

const showResult = () => {
    resultScreen.style.display= "block";
    gameScreen.style.display="none";

    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent = `Score: ${(correctCount - wrongCount) * 10 }`;
};


const showQuestion =  (qNumber) => {
    if(qIndex === data.length) return showResult();

    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `<div class="answer">
                        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
                        <label for="1">${item.answer}</label>
                        </div>`
        
    ).join("");

    selectAnswer ();
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el =>{
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });

    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
       if ( selectedAnswer !== null){
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
    }
    else alert("Please select an answer!");
    });
}

showQuestion(qIndex);
submitAnswer();

