import { generateNumber } from '../src/cli.js';

function getQuestion() {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[Math.floor(Math.random() * 3)];

  return `${generateNumber()} ${currentOperator} ${generateNumber()}`;
}

function getCorrectAnswer(question) {
  const formatedQuestion = question.replace(/\s+/g, '');

  const regex = /(\d+)([+\-*])(\d+)/;
  const match = formatedQuestion.match(regex);

  if (!match) {
    throw new Error('Неверный формат выражения');
  }

  const operand1 = parseFloat(match[1]);
  const operator = match[2];
  const operand2 = parseFloat(match[3]);

  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Неизвестный оператор');
  }
}

export default {
  question: getQuestion,
  correctAnswer: getCorrectAnswer,
  message: 'What is the result of the expression?',
};
