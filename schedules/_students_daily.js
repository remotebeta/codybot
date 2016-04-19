// 'use strict';

var c = require('../lib/channels.js');
var d = require('../lib/daily.js');

var events = [];

// events.push({
//   when: d.daily800am,
//   who: c.everyone,
//   message: '<!channel> Good Morning Hack Reactor Remote! Remember, today is a great day to have an awesome day!'
// });

events.push({
  when: d.daily1230pm,
  who: c.students,
  message: '<!channel> Lunch Time!'
});

events.push({
  when: d.daily530pm,
  who: c.students,
  message: '<!channel> Dinner Time!'
});

module.exports = events;
