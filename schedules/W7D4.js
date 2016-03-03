// 'use strict';

var c = require('../lib/channels.js');

var events = [];

events.push({
  when: new Date(2016, 02, 03, 09, 55, 0),
  who: c.seniors,
  message: '<!channel> Sprint Reflection in 5 Minutes!'
});

events.push({
  when: new Date(2016, 02, 03, 09, 59, 0),
  who: c.seniors,
  message: '<!channel> Sprint Reflection in 1 Minute!'
});

module.exports = events;
