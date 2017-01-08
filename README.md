# dead simple curry [![Build Status](https://travis-ci.org/msn0/dead-simple-curry.svg?branch=master)](http://travis-ci.org/msn0/dead-simple-curry)

> Probably the simplest currying ever :) 

# Installation

```
npm i dead-simple-curry --save
```

# Usage

Yes! It's dead simple.

```js
const curry = require('dead-simple-curry');

function multiply(a, b) {
  return a * b;
}

const doubleMe = curry(multiply)(2);

doubleMe(3) → 6
doubleMe(7) → 14
// ...
```

Some more useful examples:

```js
import curry from 'dead-simple-curry';

function sendEvent(category, action, label) {
    ga('send', category, action, label);
}

const sendVideoEvent = curry(sendEvent)('video');
sendVideoEvent('play', 'funny cats');

const playEvent = sendVideoEvent('play');
playEvent('funny cats');

```

Don't forget to take a look at [the specification](https://github.com/msn0/dead-simple-curry/blob/master/test.js).

# Credits

[Currying vs Partial Application](http://www.datchley.name/currying-vs-partial-application/) by Dave Atchley. 
