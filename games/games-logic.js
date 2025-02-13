import { getAnswer, getName } from '../src/cli.js';
import brainCalc from './brain-calc.js';
import brainPrime from './brain-prime.js';
import brainEven from './brain-even.js';
import brainProgression from './brain-progression.js';
import brainGcd from './brain-gcd.js';

export const gamesConstants = {
  brainCalc,
  brainPrime,
  brainEven,
  brainProgression,
  brainGcd,
};

export function successMessage(name) {
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
      successMessage(name);
      return true;
    }
  }
  return null;
}
