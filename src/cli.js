import readlineSync from 'readline-sync';

export function getName() {
  const name = readlineSync.question('May I have your name? ');
  if (name) return name;
  getName();
  return null;
}

export function getAnswer() {
  return readlineSync.question('Your answer: ');
}

export function generateNumber(genVal = 100) {
  return Math.floor(Math.random() * genVal) + 1;
}
