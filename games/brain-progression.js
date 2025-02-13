import { generateNumber } from '../src/cli.js';

let correctAnswer = null;

function getCorrectAnswer() {
  return correctAnswer;
}

function generateProgression() {
  const start = generateNumber(20);
  const step = generateNumber(10);
  const length = 10;

  const progression = Array.from({ length }, (_, i) => start + i * step);

  const hiddenIndex = Math.floor(Math.random() * length);
  correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return progression.join(' ');
}

export default {
  question: generateProgression,
  correctAnswer: getCorrectAnswer,
  message: 'What number is missing in the progression?',
};
