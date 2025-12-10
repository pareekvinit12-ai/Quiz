let timerDiv = document.querySelector(".timer");
let questionDiv = document.querySelector(".question");
let optionDiv = document.querySelectorAll(".options p");
let quiz = document.querySelector(".quiz");
let button = document.querySelector("button");

let data = [
  {
    q: "What is the capital of China?",
    options: ["beijing", "xinjiang", "shanghai", "hungsung"],
    a: "beijing",
     image: false

  },
  {
    q: "What is the capital of Brazil?",
    options: ["sao paulo", "brasilia", "sao paulo", "rbasilia"],
    a: "brasilia",
     image: false

  },
  {
    q: "What is the capital of Japan?",
    options: ["tokyo", "osaka", "kyoto", "hiroshima"],
    imagelink:
      "https://i.pinimg.com/1200x/dc/51/f2/dc51f2350cacaf0930f75567d46d9df1.jpg",
    a: "tokyo",
     image: true
  },
  {
    q: "Where is this monument situated?",
    imagelink:
      "https://i.pinimg.com/1200x/11/25/f3/1125f383deaf69e4f989a0a30b37f6d8.jpg",
    a: "Agra",
    options: ["Agra", "Jaipur", "New Delhi", "Udaipur"],
    image: true
  }
];
let timer = 5;
let questionNumber = 0;
let score = 0;
let array =[];


printquesandoption();
start();

function start(){
  timerDiv.innerHTML = timer;
  let interval = setInterval(() => {
    timer--;
    if (timer === 0) {
      if (questionNumber === data.length-1) {
        clearInterval(interval);

        quiz.style.display = "none";
        displayScore();
        return;
      }
      questionNumber = rendom ();
      resetOptions();
      printquesandoption();
      rendom()
      timer = 5;
      timerDiv.innerText = timer;
    } else {
      timerDiv.innerText = timer;
    }
  }, 1000);
}




   questionNumber = rendom()
function printquesandoption() {
  // questionNumber = Math.floor(Math.random() * data.length);
  if(!data[questionNumber].image){
    questionDiv.innerHTML = data[questionNumber].q; 
    // printquesandoption()
  }
  else{
    questionDiv.innerHTML= "";
    const span = document.createElement("span");
    span.innerText = data[questionNumber].q;

    const img = document.createElement("img");
    img.src = data[questionNumber].imagelink;
    img.alt = data[questionNumber].question;

    questionDiv.append(span, img);

  }
  



optionDiv.forEach((e, index) => {
    e.innerHTML = data[questionNumber].options[index];
  });
}

optionDiv.forEach((opt, index) => {
  opt.addEventListener("click", () => {
    // console.log(data[questionNumber].a);

    if (opt.innerText === data[questionNumber].a) {
      opt.style.backgroundColor = "green";
      score++;
    } else {
      opt.style.backgroundColor = "red";

      optionDiv.forEach((opt) =>
        opt.innerText === data[questionNumber].a
          ? (opt.style.backgroundColor = "green")
          : ""
      );
    }
  });
});


function resetOptions() {
  optionDiv.forEach((opt) => (opt.style.backgroundColor = "#fff"));
}
function displayScore() {
  const para = document.createElement("p");
  if(score>=3){
  para.innerText = ` Congratulations Your Score is ${score} out of ${data.length}`;
    
  }
  else{
  para.innerText = ` bad Your Score is ${score} out of ${data.length}`;

  }
  document.querySelector("#box").append(para);

}

button.addEventListener("click", () => {
  if(questionNumber < data.length -1){
    questionNumber++;
    resetOptions()
    printquesandoption() 
    timer = 5;
    timerDiv.innerText = timer
  }
questionNumber = rendom();
printquesandoption();

});
function rendom(){
  let a = Math.floor(Math.random()*data.length);
  if(array.includes(a)){
    return rendom();
  }
  array.push(a)
  return a;
}