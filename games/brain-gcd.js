import { generateNumber } from '../src/cli.js';

function calcGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
}
function getCorrectAnswer(question) {
  const numbers = question.split(' ').map((el) => +el);

  return calcGcd(...numbers);
}

export default {
  question: () => `${generateNumber()} ${generateNumber()}`,
  correctAnswer: getCorrectAnswer,
  message: 'Find the greatest common divisor of given numbers.',
};
