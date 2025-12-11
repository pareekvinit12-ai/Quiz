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
    options: ["sao paulo", "brasilia", "rio de janeiro", "salvador"],
    a: "brasilia",
    image: false
  },
  {
    q: "What is the capital of Japan?",
    options: ["tokyo", "osaka", "kyoto", "hiroshima"],
    imagelink: "https://i.pinimg.com/1200x/dc/51/f2/dc51f2350cacaf0930f75567d46d9df1.jpg",
    a: "tokyo",
    image: true
  },
  {
    q: "Where is this monument situated?",
    imagelink: "https://i.pinimg.com/1200x/11/25/f3/1125f383deaf69e4f989a0a30b37f6d8.jpg",
    a: "Agra",
    options: ["Agra", "Jaipur", "New Delhi", "Udaipur"],
    image: true
  }
];

let timer = 5;
let questionNumber = 0;
let score = 0;
let answered = false;
let interval = null;
let array =[];
questionNumber = rendom()

printquesandoption();
start();

function start(){
  timerDiv.innerHTML = timer;
  interval = setInterval(() => {
    timer--;
    if (timer <= 0) {
      if (array.length >= data.length) {
        clearInterval(interval);
        quiz.style.display = "none";
        displayScore();
        return;
      }
      // questionNumber++;
      resetOptions();
    questionNumber = rendom()
      printquesandoption();
      timer = 5;
      timerDiv.innerText = timer;
    } else {
      timerDiv.innerText = timer;
    }
  }, 1000);
}
function printquesandoption() {
 answered = false;
  questionDiv.innerHTML = "";
  // questionNumber = Math.floor(Math.random() * data.length);
  if(!data[questionNumber].image){
    questionDiv.innerHTML = data[questionNumber].q; 
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

  optionDiv.forEach(opt => {
    opt.style.pointerEvents = "auto";
    opt.style.backgroundColor = "#fff";
  });
function disableOptions() {
  optionDiv.forEach(opt => (opt.style.pointerEvents = "none"));
}

optionDiv.forEach((opt, index) => {
  opt.addEventListener("click", () => {
    if (answered) return;
    answered = true;
    disableOptions();

    const selected = opt.innerText;
    const correct = data[questionNumber].a;

    if (selected === correct) {
      opt.style.backgroundColor = "green";
      score++;
    } else {
      opt.style.backgroundColor = "red";
      optionDiv.forEach(e => {
        if (e.innerText === correct) e.style.backgroundColor = "green";
      });
    }

    if (questionNumber === data.length) {
      clearInterval(interval);
      quiz.style.display = "none";
      displayScore();
    }
  });
});

function resetOptions() {
  optionDiv.forEach((opt) => {
    opt.style.backgroundColor = "#fff";
    opt.style.pointerEvents = "auto";
  });
  answered = false;
}
function displayScore() {
  const para = document.createElement("p");
  para.innerText = `your score is ${score} out of ${data.length}`;
  document.querySelector("#box").append(para);
}

  button.addEventListener("click", () => {
  if(array.length < data.length){
    //questionNumber++;
    resetOptions();

    questionNumber = rendom()

    printquesandoption();
    timer = 5;
    timerDiv.innerText = timer;
  }
});


function rendom(){
  // let rendomquestion = Math.floor(Math.rendom()*data.length)
let rendomquestion = Math.floor(Math.random()*data.length)
  if(array.includes(rendomquestion)){
    return rendom();
  }
  array.push(rendomquestion)
  return rendomquestion;
}