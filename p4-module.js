//importing data from p4-data.js
const { data } = require("./p4-data.js");
const fastify = require("fastify")();

function getQuestions() {
  let { question } = data;
  let result = [];
  for (const { question } of data) {
    result.push(question);
  }
  return result;
}
//console.log(getQuestions());

function getAnswers() {
  let { answer } = data;
  let result = [];
  for (const { answer } of data) {
    result.push(answer);
  }
  return result;
}
//console.log(getAnswers());

function getQuestionsAnswers() {
  const questionsToString = JSON.parse(JSON.stringify(data));
  return questionsToString;
}
//console.log(getQuestionsAnswers());

function getQuestion(number = "") {
  index = number - 1;
  result = {
    question: data[index].question,
    number: number,
    error: "",
  };
  return result;
}
//console.log(getQuestion(3));

function getAnswer(number = "") {
  index = number - 1;
  result = {
    answer: data[index].answer,
    number: number,
    error: "",
  };
  return result;
}
//console.log(getAnswer(1));

function getQuestionAnswer(number = "") {
  let { question } = data;
  let { answer } = data;
  index = number - 1;
  result = {
    question: data[index].question,
    answer: data[index].answer,
    number: number,
    error: '',
  };
  return result;
}
//console.log(getQuestionAnswer(1));

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;


  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",

      { d: "(1)", f: getQuestion(1) },

    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",

      { d: "(1)", f: getAnswer(1) },

    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",

      { d: "(1)", f: getQuestionAnswer(1) },

    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
  }; 