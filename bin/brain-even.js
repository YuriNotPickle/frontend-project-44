#!/usr/bin/env node
import { getAnswer } from '../src/cli.js';
import startGame, { checkIsAnswerCorrect, generateNumber, successMessage } from '../games/games-logic.js';

function getCorrectAnswer(nmb) {
  return nmb % 2 === 0 ? 'yes' : 'no';
}
function brainEven(name, attempt = 0) {
  if (attempt > 2) {
    successMessage(name);
    return true;
  }
  if (attempt === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }

  const number = generateNumber();
  console.log(`Question: ${number}`);

  if (checkIsAnswerCorrect({
    answer: getAnswer(),
    question: number,
    name,
    getAnswerFn: getCorrectAnswer,
  })) {
    brainEven(name, attempt + 1);
  } else {
    return null;
  }
  return null;
}

startGame(brainEven);
