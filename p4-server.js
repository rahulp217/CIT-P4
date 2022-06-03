//importing data from p4-data.js
const { data } = require("./p4-data.js");
const fastify = require("fastify")();
const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module.js");

fastify.get("/cit/question", function (request, reply) {
  myObj = { error: "", statusCode: 200, questions: getQuestions() };
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

fastify.get("/cit/answer", function (request, reply) {
  myObj = { error: "", statusCode: 200, "answers:": getAnswers() };
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

fastify.get("/cit/questionanswer", function (request, reply) {
  myObj = {
    error: "",
    statusCode: 200,
    "questions_answers:": getQuestionsAnswers(),
  };
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

fastify.get("/cit/question/:number", function (request, reply) {
  let { number } = request.params;
  myObj = {
    error: "",
    statusCode: 200,
    question: getQuestion(number).question,
    number: parseInt(number),
  };
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

fastify.get("/cit/answer/:number", function (request, reply) {
  let { number } = request.params;
  myObj = {
    error: "",
    statusCode: 200,
    answer: getAnswer(number).answer,
    number: parseInt(number),
  };
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

fastify.get("/cit/questionanswer/:number", function (request, reply) {
  let { number } = request.params;
  myObj = {
    error: "",
    statusCode: 200,
    question: getQuestionAnswer(number).question,
    answer: getQuestionAnswer(number).answer,
    number: parseInt(number),
  };
  reply
    .code(200) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

fastify.get("*", function (request, reply) {
  myObj = {
    error: "Route not found",
    statusCode: 404,
  };
  reply
    .code(404) // status code
    .header("Content-Type", "application/json; charset=utf-8") // mime type for arrays and jsons
    .send(myObj);
});

const listenIP = "localhost"; // localhost:8080
const listenPort = 8080;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
