let timerDiv = document.querySelector(".timer");
let questionDiv = document.querySelector(".question");
let optionDiv = document.querySelectorAll(".options p");
let quiz = document.querySelector(".quiz")


let data = [
  {
    q: "What is the capital of China?",
    options: ["beijing", "xinjiang", "shanghai", "hungsung"],
    a: "beijing"
  },
  {
    q: "What is the capital of Brazil?",
    options: ["sao paulo", "brasilia", "sao paulo", "brasilia"],
    a: "brasilia"
  },
  {
    q: "What is the capital of Japan?",
    options: ["tokyo", "osaka", "kyoto", "hiroshima"],
    a: "tokyo"
  },
  {
    q: "What is the capital of India?",
    options: ["mumbai", "delhi", "kolkata", "chennai"],
    a: "delhi"
  }

];


let timer = 5;
 let  questionNumber = 0;

// timerDiv.innerText = timer;
printquesandoption();
start();

function start(){
  timerDiv.innerHTML = timer;
  let interval = setInterval(()=>{
    timer--;
    if(timer === 0){
      if(questionNumber === data.length-1){
        clearInterval(interval);

        quiz.style.display = "none"
        return;

      }
      questionNumber++;
      printquesandoption()
      timer = 5;
      timerDiv.innerText = timer;
    }
    else {
      timerDiv.innerText = timer; 
    }
  }, 500)
}


function printquesandoption(){
  questionDiv.innerHTML = data[questionNumber].q;
  optionDiv.forEach((e, index)=>{
    e.innerHTML = data[questionNumber].options[index]
  })
}



optionDiv.forEach((e, index)=>{
  e.addEventListener("click", () =>{
    
    if(e.innerText === data[questionNumber].a){
      e.style.backgroundColor= "green";
    }
    else{
      e.style.backgroundColor= "red"
    }
    
  });

})
