// Compose Function

const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const string = 'String out compose';

const compose = (...fns) => x =>
  fn.reduceRight((acc, fn) => fn(acc), x);  // ReduceRight ....

const enhance = compse(repeat, exclaim, scream);

console.log(enhance(string));
