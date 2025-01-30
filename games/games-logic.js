import { getName } from '../src/cli.js';

export default function startGame(game) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  game(name);
}

export function successMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

export function generateNumber() {
  return (Math.random() * 100).toFixed();
}

function choseCompareType(val1, val2) {
  if (Number.isNaN(+val1) || Number.isNaN(+val2)) {
    return val1 === val2;
  }
  return +val1 === +val2;
}

export function logResult({ correctAnswer, answer, name }) {
  if (choseCompareType(correctAnswer, answer)) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}`);
  }

  return null;
}

export function checkIsAnswerCorrect({
  answer, question, name, getAnswerFn,
}) {
  const correctAnswer = getAnswerFn(question);

  logResult({ correctAnswer, answer, name });

  return choseCompareType(correctAnswer, answer);
}
