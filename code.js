"use strict";
const quizData=[
    {
        question:"How many minutes are in a full week?",
        a:"10080",
        b:"9430",
        c:"11000",
        d:"11120",
        correct:"a",
    },
    {
        question:"How many dots appear on a pair of dice?",
        a:"36",
        b:"28",
        c:"42",
        d:"39",
        correct:"c",
    },
    {
       question:"Which country has the highest life expectancy?",
        a:"India",
        b:"Australia",
        c:"China",
        d:"HongKong",
        correct:"d",
    },
    {
        question:"What phone company produced the 3310?",
        a:"Oppo",
        b:"Nokia",
        c:"Vivo",
        d:"Samsung",
        correct:"b",
    },
    {
         question:"Which day of the week does the Jewish Sabbath begin?",
        a:"Tuesday",
        b:"Friday",
        c:"Saturday",
        d:"Monday",
        correct:"b",
    },
];
const quiz=document.querySelector(".quiz-body");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const footerEl=document.querySelector(".quiz-footer");
const quizDetailEl=document.querySelector(".quiz-details");

const a_txt=document.getElementById("a_text");
const b_txt=document.getElementById("b_text");
const c_txt=document.getElementById("c_text");
const d_txt=document.getElementById("d_text");
const btn_submit=document.getElementById("btn");

const celebrationMessage=document.getElementById("celebration-message")
let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deSelectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML=currentQuizData.question;
    a_txt.innerHTML=currentQuizData.a;
    b_txt.innerHTML=currentQuizData.b;
    c_txt.innerHTML=currentQuizData.c;
    d_txt.innerHTML=currentQuizData.d;

    quizDetailEl.innerHTML=`<p>${currentQuiz + 1} of ${quizData.length}Questions</p>`;
    
}

function deSelectAnswer(){
    answerEls.forEach((answerEl)=> {
        answerEl.checked=false;
    });
}
function getSelected(){
    let answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}

btn_submit.addEventListener("click",()=>{
    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz<quizData.length)
        {
            loadQuiz();
        }
        else{
            quiz.innerHTML=`You Answered ${score}/${quizData.length}Questions correctly</h2>
            <button type="button" onclick="location.reload()">Reload</button>
            `;
            footerEl.style.display="none";
            }
    }
});
