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
    a: "tokyo",
     image: false
  },
  {
    q: "Where is this monument situated?",
    imagelink:
      "https://i.pinimg.com/1200x/f8/c4/65/f8c4655ef6ef16f307438e7c78956e8d.jpg",
    a: "Agra",
    options: ["Agra", "Jaipur", "New Delhi", "Udaipur"],
    image: true
  }
];
let timer = 5;
let questionNumber = 0;
let score = 0;

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
      questionNumber++;
      resetOptions();
      printquesandoption();
      timer = 5;
      timerDiv.innerText = timer;
    } else {
      timerDiv.innerText = timer;
    }
  }, 1000);
}
function printquesandoption() {
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
});