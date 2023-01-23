const quizDB = [
    {
        question: " HTML stands for __________",
        a: "HyperText Markup Language",
        b: "HyperText Machine Language",
        c: "HyperText Marking Language",
        d: "HighText Marking Language",
        ans: "ans1"
    },
    {
        question: " Which of the following tag is used for inserting the largest heading in HTML?",
        a: "head",
        b: "<h1>",
        c: "<h6>",
        d: "heading",
        ans: "ans2"
    },
    {
        question: " Which HTML element is used for short quote?",
        a:   "<em>",
        b:   "<abbr>",
        c:   "<q>",
        d:   "<blockquote>",
        ans: "ans3"
    },{
        question: "How to create a checkbox in HTML Form?",
        a: "<input type=”text”>",
        b: "<input type=”textarea”>",
        c: "<input type=”checkbox”>",
        d: "<input type=”button”>",
        ans : "ans3"
        
    }
];

const question = document.querySelector('.question');
const option1 =   document.querySelector('#option1');
const option2 =   document.querySelector('#option2');
const option3 =   document.querySelector('#option3');
const option4 =   document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore')

let questionCount = 0;
let score =0;
const loadQuestion = () => {
      const questionList = quizDB[questionCount];
      question.innerText = questionList.question;
      option1.innerText  = questionList.a;
      option2.innerText  = questionList.b;
      option3.innerText  = questionList.c;
      option4.innerText  = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElm) => {
        if(curAnsElm.checked){
            answer = curAnsElm.id;
        } 
       
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElm) => curAnsElm.checked = false)
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    deselectAll();

    questionCount++;
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> you scored ${score} / ${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> play again </button>
        `;

        showScore.classList.remove('showArea');
    }


});
