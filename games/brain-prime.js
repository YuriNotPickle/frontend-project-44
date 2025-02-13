import { generateNumber } from '../src/cli.js';

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

export default {
  question: generateNumber,
  correctAnswer: getCorrectAnswer,
  message: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};
