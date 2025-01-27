#!/usr/bin/env node
import { getAnswer, getName } from '../src/cli.js';

function getCorrectAnswer(nmb) {
  return nmb % 2 === 0 ? 'yes' : 'no';
}
function checkIsAnswerCorrect(answer, nmb) {
  const correctAnswer = getCorrectAnswer(nmb);
  if (correctAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return correctAnswer === answer;
}
export default function brainEven(attempt = 0) {
  if (attempt > 3) return true;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const number = (Math.random() * 1000).toFixed();
  console.log(`Question: ${number}`);

  if (checkIsAnswerCorrect(getAnswer(), number)) {
    brainEven(attempt + 1);
  } else {
    brainEven(0);
  }
  return null;
}

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);
brainEven();
console.log(`Congratulations, ${name}!`);
