import { getAnswer, getName } from './cli.js';
import brainCalc from '../games/brain-calc.js';
import brainPrime from '../games/brain-prime.js';
import brainEven from '../games/brain-even.js';
import brainProgression from '../games/brain-progression.js';
import brainGcd from '../games/brain-gcd.js';

export const gamesConstants = {
  brainCalc,
  brainPrime,
  brainEven,
  brainProgression,
  brainGcd,
};

export function sendSuccessMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

export function logResult({ correctAnswer, answer, name }) {
  if (correctAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }

  return null;
}

export function checkIsAnswerCorrect({
  answer, question, name, getAnswerFn,
}) {
  const correctAnswer = String(getAnswerFn(question));

  logResult({ correctAnswer, answer, name });

  return correctAnswer === answer;
}

export default function startGame(game) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  console.log(`Hello, ${name}!`);
  if (!game) return null;

  for (let attempt = 0; attempt < 3;) {
    if (attempt === 0) {
      console.log(gamesConstants[game].message);
    }

    const question = gamesConstants[game].question().toString();
    console.log(`Question: ${question}`);

    if (checkIsAnswerCorrect({
      question,
      name,
      getAnswerFn: gamesConstants[game].correctAnswer,
      answer: getAnswer(),
    })) {
      attempt += 1;
    } else {
      return null;
    }
    if (attempt > 2) {
      sendSuccessMessage(name);
      return true;
    }
  }
  return null;
}
