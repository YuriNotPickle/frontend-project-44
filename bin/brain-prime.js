#!/usr/bin/env node
import { getAnswer } from '../src/cli.js';
import startGame, { checkIsAnswerCorrect, generateNumber, successMessage } from '../games/games-logic.js';

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function getCorrectAnswer(nmb) {
  return isPrime(nmb) ? 'yes' : 'no';
}

function brainPrime(name, attempt = 0) {
  if (attempt > 2) {
    successMessage(name);
    return true;
  }

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const number = generateNumber();
  console.log(`Question: ${number}`);

  if (checkIsAnswerCorrect({
    answer: getAnswer(),
    question: number,
    name,
    getAnswerFn: getCorrectAnswer,
  })) {
    brainPrime(name, attempt + 1);
  } else {
    brainPrime(name, 0);
  }
  return null;
}

startGame(brainPrime);
