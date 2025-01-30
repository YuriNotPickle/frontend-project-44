#!/usr/bin/env node
import { getAnswer } from '../src/cli.js';
import startGame, {
  checkIsAnswerCorrect, generateNumber, successMessage,
} from '../games/games-logic.js';

function getCorrectAnswer(question) {
  const numbers = question.split(' ').map((el) => +el);
  function calcGcd(a, b) {
    if (b === 0) {
      return a;
    }
    return calcGcd(b, a % b);
  }

  return calcGcd(...numbers);
}
function brainGcd(name, attempt = 0) {
  if (attempt > 2) {
    successMessage(name);
    return true;
  }
  if (attempt === 0) {
    console.log('Find the greatest common divisor of given numbers');
  }

  const question = `${generateNumber()} ${generateNumber()}`;
  console.log(`Question: ${question}`);

  if (checkIsAnswerCorrect({
    answer: getAnswer(),
    question,
    name,
    getAnswerFn: getCorrectAnswer,
  })) {
    brainGcd(name, attempt + 1);
  } else {
    return null;
  }
  return null;
}

startGame(brainGcd);
