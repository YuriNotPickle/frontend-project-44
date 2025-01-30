#!/usr/bin/env node
import { getAnswer } from '../src/cli.js';
import startGame, {
  checkIsAnswerCorrect, successMessage,
} from '../games/games-logic.js';

function generateProgression() {
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const length = 10;

  const progression = Array.from({ length }, (_, i) => start + i * step);

  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: () => correctAnswer,
  };
}

function brainProgression(name, attempt = 0) {
  if (attempt > 2) {
    successMessage(name);
    return true;
  }
  if (attempt === 0) {
    console.log('Find the greatest common divisor of given numbers');
  }

  const progression = generateProgression();
  const { question } = progression;
  console.log(`Question: ${question}`);

  if (checkIsAnswerCorrect({
    answer: getAnswer(),
    question,
    name,
    getAnswerFn: progression.correctAnswer,
  })) {
    brainProgression(name, attempt + 1);
  } else {
    return null;
  }
  return null;
}

startGame(brainProgression);
