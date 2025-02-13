import { generateNumber } from '../src/cli.js';

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

export default {
  question: () => `${generateNumber()} ${generateNumber()}`,
  correctAnswer: getCorrectAnswer,
  message: 'What is the result of the expression?',
};
