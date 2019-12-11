// step 1 create timer to countdown to 75 to 0, this is for 5 questions, each question gets 15 seconds
// step 2 populate questions and answers dynamically
//step 3  answer correct no penalty, answer incorrectly you are penalized 15 seconds, high score cannot go below zero

const questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "What is a for loop?",
      choices: ["for", "while", "if statement", "parentheses"],
      answer: "parentheses"
    },
    {
      title: "How to declare an array.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "How to declare an object",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }
    ///etc.
  ];

  const start= document.querySelector('#time');


  const displayscore = document.querySelector("#displayscore")


  displayscore.style="display:none"

var maxtime= questions.length * 15

  const qanda = document.querySelector("#qanda");

  let count= maxtime;

 let counter; //1000 will  run it every 1 second

  qanda.style="display:none"
 let score ;
  function myFunction() {
    qanda.style="display:''"
   
    counter=setInterval(timer, 1000);

  };
  
let index=0;
let div= document.createElement("div")
div.textContent=questions[index].title
   qanda.appendChild(div)
for (let i = 0; i < questions[index].choices.length; i++) {
  let button= document.createElement("button")
  button.textContent=questions[index].choices[i]
  let br=document.createElement("br")
  button.setAttribute("data-rightAnswer",questions[index].answer)
  qanda.appendChild(button)
  qanda.appendChild(br)

}
   index++

function timer()
{

  count=count-1;
 
  start.textContent= count
  
  if(count % 15 === 0){
    qanda.innerHTML="";
    div.textContent=questions[index].title
    qanda.appendChild(div)

    for (let i = 0; i < questions[index].choices.length; i++) {
      let button= document.createElement("button")
      button.textContent=questions[index].choices[i]
      let br=document.createElement("br")
      button.setAttribute("data-rightAnswer",questions[index].answer)
      qanda.appendChild(button)
      qanda.appendChild(br)
     
    }
    index++;
  }


  if (count === 0)
  {
    qanda.style="display:none"
    displayscore.style="display:''"

     clearInterval(counter);
     //counter ended, do something here
     return;
  }


  //Do code for showing the number of seconds here
}


