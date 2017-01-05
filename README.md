# dead simple curry [![Build Status](https://travis-ci.org/msn0/dead-simple-curry.svg?branch=master)](http://travis-ci.org/msn0/dead-simple-curry)

> Probably the simplest currying ever :) 

# Installation

```
npm i dead-simple-curry --save
```

# Usage

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

Don't forget to take a look at [the specification](spec.js).

# Credits

[Currying vs Partial Application](http://www.datchley.name/currying-vs-partial-application/) by Dave Atchley. 
