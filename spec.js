import test from 'ava';
import curry from './';

test('should curry a function', t => {
  const doubleMe = curry(multiply)(2);

  t.is(doubleMe(5), 10);
});

test('should apply a function partially', t => {
  t.is(curry(add)(1)(2)(3)(4)(5), 15);
  t.is(curry(add)(1)(2, 3)(4)(5), 15);
  t.is(curry(add)(1)(2, 3, 4)(5), 15);
  t.is(curry(add)(1, 2, 3, 4)(5), 15);
  t.is(curry(add)(1, 2, 3, 4, 5), 15);
});

test('should return a function for incomplete call', t => {
  t.is(typeof curry(add)(1), 'function');
});

function multiply(a, b) {
  return a * b;
}

function add(a, b, c, d, e) {
  return a + b + c + d + e;
}
