import { generateNumber } from '../src/cli.js';

function checkIsEven(nmb) {
  return nmb % 2 === 0;
}
function getCorrectAnswer(nmb) {
  return checkIsEven(nmb) ? 'yes' : 'no';
}

export default {
  question: generateNumber,
  correctAnswer: getCorrectAnswer,
  message: 'Answer "yes" if the number is even, otherwise answer "no".',
};
