const quizData = [
    {
      question: "Qual é o nome deste jogo?",
      options: ["Blasphemos", "Terraria", "The last faith", "Moonscars"],
      answer: "Blasphemos",
      imageName: "blas.jpeg"
    },
    {
      question: "Qual é o nome deste jogo?",
      options: ["Castlevania", "Moonscars", "Dead Cells", "Shovel Knight"],
      answer: "Dead Cells",
      imageName: "dead.jpg"
    },
    {
        question: "Qual é o nome deste jogo?",
        options: ["TMNT- The Hyperstone", "Cyber-Shadow", "Carrion", "Metroid"],
        answer: "Cyber-Shadow",
        imageName: "cyber.png"
    },
    {
        question: "Qual é o nome deste jogo?",
        options: ["TMNT- The Hyperstone", "Cyber-Shadow", "Carrion", "Metroid"],
        answer: "Cyber-Shadow",
        imageName: "cyber.png"
    }

    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    const questionImageElement = document.createElement('img');
    questionImageElement.src = `none`;
    questionImageElement.src = `img/${question.imageName}`;

    // Remove the previous image
    const imageContainer = document.getElementById('question-image');
    while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
    }

    // Append the new image element to the image container
    imageContainer.appendChild(questionImageElement);
  
    document.getElementById('question-image').appendChild(questionImageElement);
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = 
    `<h1>Quiz Completo!</h1>
    <p>Sua Pontuação: ${score}/${quizData.length}</p>`;
  }
  
  showQuestion();