//all the questions and possible results listed below

var questions = [];

questions[0] = {
  question: "Questão 1",
  answers: ["Não me sinto triste", "Eu me sinto triste", "Estou sempre triste e não consigo sair disto", "Estou tão triste ou infeliz que não consigo suportar"],
};

questions[1] = {
  question: "Questão 2",
  answers: ["Não estou especialmente desanimado quanto ao futuro", "Eu me sinto desanimado quanto ao futuro", "Acho que nada tenho a esperar", "Acho o futuro sem esperanças e tenho a impressão de que as coisas não podem melhorar"],
};

questions[2] = {
  question: "Questão 3",
  answers: ["Não me sinto um fracasso",
    "Acho que fracassei mais do que uma pessoa comum", "Quando olho pra trás, na minha vida, tudo o que posso ver é um monte de fracassos", "Acho que, como pessoa, sou um completo fracasso"
  ],
};

questions[3] = {
  question: "Questão 4",
  answers: ["Tenho tanto prazer em tudo como antes", "Não sinto mais prazer nas coisas como antes", "Não encontro um prazer real em mais nada", "Estou insatisfeito ou aborrecido com tudo"],
};

questions[4] = {
  question: "Questão 5",
  answers: ["Não me sinto especialmente culpado", "Eu me sinto culpado grande parte do tempo", "Eu me sinto culpado na maior parte do tempo", "Eu me sinto sempre culpado"],
};

questions[5] = {
  question: "Questão 6",
  answers: ["Não acho que esteja sendo punido", "Acho que posso ser punido", "Creio que vou ser punido", "Acho que estou sendo punido"],
};

questions[6] = {
  question: "Questão 7",
  answers: ["Não me sinto decepcionado comigo mesmo", "Estou decepcionado comigo mesmo", "Estou enojado de mim", "Eu me odeio"],
};

questions[7] = {
  question: "Questão 8",
  answers: ["Não me sinto de qualquer modo pior que os outros", "Sou crítico em relação a mim por minhas fraquezas ou erros", "Eu me culpo sempre por minhas falhas", "Eu me culpo por tudo de mal que acontece"],
};

questions[8] = {
  question: "Questão 9",
  answers: ["Não tenho quaisquer idéias de me matar", "Tenho idéias de me matar, mas não as executaria", "Gostaria de me matar", "Eu me mataria se tivesse oportunidade"],
};

questions[9] = {
  question: "Questão 10",
  answers: ["Não choro mais que o habitual", "Choro mais agora do que costumava", "Agora, choro o tempo todo", "Costumava ser capaz de chorar, mas agora não consigo, mesmo que o queria"],
};

questions[10] = {
  question: "Questão 11",
  answers: ["Não sou mais irritado agora do que já fui", "Fico aborrecido ou irritado mais facilmente do que costumava", "Agora, eu me sinto irritado o tempo todo", "Não me irrito mais com coisas que costumavam me irritar"],
};

questions[11] = {
  question: "Questão 12",
  answers: ["Não perdi o interesse pelas outras pessoas", "Estou menos interessado pelas outras pessoas do que costumava estar", "Perdi a maior parte do meu interesse pelas outras pessoas", "Perdi todo o interesse pelas outras pessoas"],
};

questions[12] = {
  question: "Questão 13",
  answers: ["Tomo decisões tão bem quanto antes", "Adio as tomadas de decisões mais do que costumava", "Tenho mais dificuldades de tomar decisões do que antes", "Absolutamente não consigo mais tomar decisões"],
};

questions[13] = {
  question: "Questão 14",
  answers: ["Não acho que de qualquer modo pareço pior do que antes", "Estou preocupado em estar parecendo velho ou sem atrativo", "Acho que há mudanças permanentes na minha aparência, que me fazem parecer sem atrativo", "Acredito que pareço feio"],
};

questions[14] = {
  question: "Questão 15",
  answers: ["Posso trabalhar tão bem quanto antes", "É preciso algum esforço extra para fazer alguma coisa", "Tenho que me esforçar muito para fazer alguma coisa", "Não consigo mais fazer qualquer trabalho"],
};

questions[15] = {
  question: "Questão 16",
  answers: ["Consigo dormir tão bem como o habitual", "Não durmo tão bem como costumava", "Acordo 1 a 2 horas mais cedo do que habitualmente e acho difícil voltar a dormir", "Acordo várias horas mais cedo do que costumava e não consigo voltar a dormir"]
};

questions[16] = {
  question: "Questão 17",
  answers: ["Não fico mais cansado do que o habitual", "Fico cansado mais facilmente do que costumava", "Fico cansado em fazer qualquer coisa", "Estou cansado demais para fazer qualquer coisa"]
};

questions[17] = {
  question: "Questão 18",
  answers: ["O meu apetite não está pior do que o habitual", "Meu apetite não é tão bom como costumava ser", "Meu apetite é muito pior agora", "Absolutamente não tenho mais apetite"],
};

questions[18] = {
  question: "Questão 19",
  answers: ["Não tenho perdido muito peso se é que perdi algum recentemente", "Perdi mais do que 2 quilos e meio", "Perdi mais do que 5 quilos", "Perdi mais do que 7 quilos"],
};

questions[19] = {
  question: "Questão 20",
  answers: ["Não estou mais preocupado com a minha saúde do que o habitual", "Estou preocupado com problemas físicos, tais como dores, indisposição do estômago ou constipação", "Estou muito preocupado com problemas físicos e é difícil pensar em outra coisa", "Estou tão preocupado com meus problemas físicos que não consigo pensar em qualquer outra coisa"],
};

questions[20] = {
  question: "Questão 21",
  answers: ["Não notei qualquer mudança recente no meu interesse por sexo", "Estou menos interessado por sexo do que costumava", "Estou muito menos interessado por sexo agora", "Perdi completamente o interesse por sexo"],
};

var results = [];

results[0] = {
  result: "Minimal depression",
  description: "It is likely a temporary deterioration in mood caused by current events in your life. If symptoms persist, take this test after 7 days and compare the results for deterioration or improvement."
};

results[1] = {
  result: "Mild depression",
  description: "The result in this range indicates the need to go to a psychologist or psychotherapist for further diagnosis. Mild depressive symptoms are treated with psychotherapy, without the need for pharmacotherapy. A psychologist or psychotherapist will refer you to a psychiatrist if necessary."
};

results[2] = {
  result: "Moderate depression",
  description: "Scoring in this range suggests taking quick action and contacting a psychologist, psychotherapist or psychiatrist. It is possible that pharmacological and antidepressant treatment will be initiated by a psychiatrist. It is important to start psychotherapy in addition to pharmacological actions. This determines the effective treatment of depression."
};

results[3] = {
  result: "Severe depression",
  description: "It is necessary to see a psychiatrist. It is a dangerous condition for health and life, mainly when suicidal thoughts appear. Psychotherapy is more intense. In some cases, hospital treatment is necessary to prevent life-threatening conditions."
};

//displays first question
document.getElementById("question").textContent = questions[0].question;
document.getElementById("answer0").textContent = questions[0].answers[0];
document.getElementById("answer1").textContent = questions[0].answers[1];
document.getElementById("answer2").textContent = questions[0].answers[2];
document.getElementById("answer3").textContent = questions[0].answers[3];

var next = document.getElementById("next");

//variables for storing the user score, result and the index of a question
// Create a variable to store the user's score
var userScore = 0;
var userResult = [];
var questionNumber = 0;

//the userResult object to store user's personal result
userResult[0] = {
  result: "N/A",
  description: "N/A",
};

// after clicking next button the score is being updated and the questions changed
next.addEventListener('click', function() {


  // assignes the correct amout of points for the answer and sums it
  let answerPoints = parseInt($("form input[name=answer]:checked").val());
  userScore = userScore + answerPoints;

  // shows the results if it is the last question
  if (questionNumber == (questions.length - 1)) {

    //changes the screen to the results screen
    document.getElementsByTagName("article")[0].style.display = "none";
    var resultsPage = document.getElementById("resultsPage");
    resultsPage.classList.remove("results-hidden");

    //assignes the value to the correct result
    if (userScore <= 11) {
      userResult[0].result = results[0].result;
      userResult[0].description = results[0].description;
    } else if ((userScore >= 12) && (userScore <= 19)) {
      userResult[0].result = results[1].result;
      userResult[0].description = results[1].description;
    } else if ((userScore >= 20) && (userScore <= 25)) {
      userResult[0].result = results[2].result;
      userResult[0].description = results[2].description;
    } else if ((userScore >= 26) && (userScore <= 63)) {
      userResult[0].result = results[3].result;
      userResult[0].description = results[3].description;
    }

    //shows the results on the screen

    document.getElementById("score").textContent = "Seu score é " + userScore;
  
  } else {

    //if it is no the last question, continue and change to the next one
    questionNumber++;

    document.getElementById("question").textContent = questions[questionNumber].question;
    document.getElementById("answer0").textContent = questions[questionNumber].answers[0];
    document.getElementById("answer1").textContent = questions[questionNumber].answers[1];
    document.getElementById("answer2").textContent = questions[questionNumber].answers[2];
    document.getElementById("answer3").textContent = questions[questionNumber].answers[3];
  }

});


