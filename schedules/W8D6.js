// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W8D6', 13, 25),
  who: c.seniors,
  message: '<!channel> Extreme Blogging starts in 5 minutes! https://zoom.us/j/525181230'
});

events.push({
  when: date('W8D6', 13, 29),
  who: c.seniors,
  message: '<!channel> Extreme Blogging starts in 1 minute! https://zoom.us/j/525181230'
});

module.exports = events;
