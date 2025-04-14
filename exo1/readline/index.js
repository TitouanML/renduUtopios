import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { content } from "./quizzContent.js";

let score = 0;
let startingSentences = [
  "Here we go for",
  "We're going for",
  "Let's go for",
  "Are you ready for",
];

const getRandomStartingSentence = () => {
  return startingSentences[Math.floor(Math.random() * startingSentences.length)];
};

const rl = readline.createInterface({ input, output });

console.log(`Welcome to the ${content.title}!`);
console.log("Are you ready to answer some questions my friend ?");

//asking if user is ready to anwser
let isReadyToContinue = false;
while (!isReadyToContinue) {
  let answer = await rl.question("Yes / No > ");
  if (answer.toLowerCase() === "yes") {
    isReadyToContinue = true;
  } else {
    console.log("We will wait for you to be ready my friend ...");
  }
}
console.log("For each question you will have to type A, B, C or D to answer.");
console.log("Otherwise you will not gain any point.");
await rl.question("Press any key to continue ...");
console.clear();

//displaying all the questions
for (let i = 0; i < content.questions.length; i++) {
  const question = content.questions[i];
  console.log(`${getRandomStartingSentence()} question number ${i + 1}`);
  console.log("---------------------------------------");
  console.log(question.question);

  question.answers.forEach((answer) => {
    console.log(`${answer.position} : ${answer.answer}`);
  });

  let userAnswer = await rl.question("What is your answer ? > ");
  const correctAnswer = question.answers.find((a) => a.isCorrect).position;

  if (userAnswer.toUpperCase() === correctAnswer) {
    console.log("Correct !");
    score++;
  } else {
    console.log("Incorrect !");
  }

  console.log();
}

switch (true) {
  case score === 0:
    console.log("You are a looser, 0 points for you !");
    break;
  case score === content.questions.length:
    console.log("You are a genius, you got a perfect score !");
    break;
  case score > 1:
    console.log(`Good job you got ${score} points !`);
    break;
}

console.log("Thanks for playing !");
await rl.close();
