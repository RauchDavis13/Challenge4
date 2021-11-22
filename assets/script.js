var timer = 60;
var startBtn = document.querySelector("#introBtn");
var introH1 = document.querySelector("#intro-h1");
var introText = document.querySelector("#intro-text");
const question = document.getElementById("question-box");
const answerList = document.querySelector("#answer-box");
const showResult = document.querySelector("#result");
var counter = document.querySelector("#timer");
var screen = document.querySelector("#content-box"); 
var ansTestValue = "";
var answerId = "";


const Questions = [{
    id: 0,
    q: "Commonly used data types DO NOT include:",
    a: [{ ansId: 0, text: "1. strings", isCorrect: false},
        { ansId: 1, text: "2. boolean", isCorrect: false},
        { ansId: 2, text: "3. alerts", isCorrect: true},
        { ansId: 3, text: "4. numbers", isCorrect: false}
      ]
  },
  {
    id: 1,
    q: "The condition in an if/false statement is enclosed with ___________",
    a: [{ ansId: 0, text: "1. quotes", isCorrect: false},
        { ansId: 1, text: "2. curly brackets", isCorrect: true},
        { ansId: 2, text: "3. parenthesis", isCorrect: false},
        { ansId: 3, text: "4. square brackets", isCorrect: false}
      ]
  },
  {
    id: 2,
    q: "Arrays in Javascript can be used to store ______________",
    a: [{ ansId: 0, text: "1. numbers and strings", isCorrect: false},
        { ansId: 1, text: "2. other arrays", isCorrect: false},
        { ansId: 2, text: "3. booleans", isCorrect: false},
        { ansId: 3, text: "4. all of the above", isCorrect: true}
      ]
  },
  {
    id: 3,
    q:  "String values must be enclosed within ____________ when being assigned variables",
    a: [{ ansId: 0, text: "1. commas", isCorrect: false},
        { ansId: 1, text: "2. curly brackets", isCorrect: false},
        { ansId: 2, text: "3. quotes", isCorrect: true},
        { ansId: 3, text: "4. parenthesis", isCorrect: false}
      ]
  },
  {
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger",
    a: [{ ansId: 0, text: "1. Javascript", isCorrect: false},
        { ansId: 1, text: "2. terminal/bash", isCorrect: false},
        { ansId: 2, text: "3. for loops", isCorrect: false},
        { ansId: 3, text: "4. console.log", isCorrect: true}
      ]    
   }
]
  
// Set start
var start = true;
var score = 0;
var id = 0;

function clock () {
  var countdown = setInterval(function() {
    // If there are no more words left in the message
    if (timer <= 0) {
      // Use `clearInterval()` to stop the timer
      clearInterval(countdown);
      alert("Your Time Is Up!");
      
    } else {
      // Display one word of the message
      counter.textContent = timer;
      timer--;

    }
  }, 1000);
}

// starts questions and timer
function begin () {
  introH1.style.display = "none";
  introText.style.display = "none";
  startBtn.style.display = "none";
  iterate();
  clock();
}

// Cycle through question array
function iterate() {

  // loops through Questions array and shows "q" (the question)
 
  for (var i = 0; i < Questions.length; i++) {
    Questions.id = i;
    question.innerText = Questions[i].q;
    console.log(Questions[i].q);

    console.log(Questions[i].a.length);
    var answerButton = function() {  
      // loops through "a" (answer choices) array of Questions array, and creates answer choice buttons
      for (var j=0; j < Questions[id].a.length; j++) {
        const aId= j;
        answerId = Questions[id].a[aId].ansId;
        console.log(Questions[id].a[aId]);
        console.log(Questions[id].a[aId].text);
        console.log(answerId);       
                
        var answer = document.createElement("button");
        answer.setAttribute("class", "answerBtn");
        //answer.setAttribute("ansId", answerId);
        answer.innerText = Questions[id].a[aId].text;
        answer.ansIdNum = Questions[id].a[aId].ansId;
        answer.value = Questions[id].a[aId].isCorrect;

        console.log(answer.ansIdNum);
          
        ansTestValue = answer.value;
        answerList.appendChild(answer);
        answer.addEventListener("click", ansEval); 
      }     
      
      return answer;
      
    }
    
  }
  answerButton(); 
}


var ansEval = function () {
  console.log(answerId);
  console.log(ansTestValue);
  if (ansTestValue = true) {
    showResult.textContent = "Correct!  Good job, 10pts added";
    score = score + 10;
  
  } else {
    showResult.textContent = "Wrong Answer!.  10pts deducted";
    score = score - 10;
  }
}

console.log(answerId);
console.log(ansTestValue);   

startBtn.addEventListener("click", begin);




