import { generateNumber } from '../src/cli.js';

function isEven(nmb) {
  return nmb % 2 === 0;
}
function getCorrectAnswer(nmb) {
  return isEven(nmb) ? 'yes' : 'no';
}

export default {
  question: generateNumber,
  correctAnswer: getCorrectAnswer,
  message: 'Answer "yes" if the number is even, otherwise answer "no".',
};
