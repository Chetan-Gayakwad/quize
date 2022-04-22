//Question bank
var questionBank= [

    {
        question: 'Suppose that you would like to create an instance of a new Map that has an iteration order that is the same as the iteration order of an existing instance of a Map. Which concrete implementation of the Map interface should be used for the new instance?',
        option: ['TreeMap', 'HashMap', 'LinkedHashMap', 'The answer depends on the implementation of the existing instance.'],
        answer: 'LinkedHashMap'
    },
    {
        question: 'Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?',
        option: ['java.lang.String', 'java.lang.Double', 'java.lang.StringBuffer', 'java.lang.Character'],
        answer: 'java.lang.StringBuffer'
    },
    {
        question: 'Which collection class allows you to grow or shrink its size and provides indexed access to its elements, but whose methods are not synchronized?',
        option: ['java.util.HashSet', 'java.util.LinkedHashSet', 'java.util.List', 'java.util.ArrayList'],
        answer: 'java.util.ArrayList'
    },
    {
        question: 'Which interface does java.util.Hashtable implement?',
        option: ['Java.util.Map', 'Java.util.List', 'Java.util.HashTable', 'Java.util.Collection'],
        answer: 'Java.util.Map'
    },

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();