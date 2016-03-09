// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W2D3', 09, 00),
  who: c.staff_helpdesk,
  message: '<!channel> Good Morning Helpdesk! Today the juniors embark on n-queens. Check out these notes to help you through this sprint: https://github.com/remotebeta-labs/docs.instruction/blob/master/sprint.n-queens.md'
});

module.exports = events;
