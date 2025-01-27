#!/usr/bin/env node
import { getName } from '../src/cli.js';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);
brainEven(0);
console.log(`Congratulations, ${name}!`);
