#!/usr/bin/env node
/* eslint no-eval: 0 */
import { getAnswer } from '../src/cli.js';
import startGame, {
  checkIsAnswerCorrect, generateNumber, successMessage,
} from '../games/games-logic.js';

function getCorrectAnswer(question) {
  return eval(question);
}
function brainCalc(name, attempt = 0) {
  if (attempt > 2) {
    successMessage(name);
    return true;
  }

  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[Math.floor(Math.random() * 3)];

  console.log('What is the result of the expression?');
  const question = `${generateNumber()} ${getRandomOperator} ${generateNumber()}`;
  console.log(`Question: ${question}`);

  if (checkIsAnswerCorrect({
    answer: getAnswer(),
    question,
    name,
    getAnswerFn: getCorrectAnswer,
  })) {
    brainCalc(name, attempt + 1);
  } else {
    brainCalc(name, 0);
  }
  return null;
}

startGame(brainCalc);
