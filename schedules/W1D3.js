// 'use strict';

var c = require('../lib/channels.js');
var date = require('../lib/date.js');

var events = [];

events.push({
  when: date('W1D3', 09, 30),
  who: c.juniors,
  message: '<!channel> Half Way through your Self Assessment. Don\'t forget to attempt all prompts!'
});

events.push({
  when: date('W1D3', 09, 50),
  who: c.juniors,
  message: '<!channel> 10 minutes remaining. Start wrapping up loose ends!'
});

events.push({
  when: date('W1D3', 09, 55),
  who: c.juniors,
  message: '<!channel> 5 minutes remaining. Get your Pull Requests In!'
});

events.push({
  when: date('W1D3', 10, 00),
  who: c.juniors,
  message: '<!channel> Congrats! SA0 is over. Time for video lectures.'
});

events.push({
  when: date('W1D3', 12, 10),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: date('W1D3', 12, 14),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: date('W1D3', 13, 30),
  who: c.juniors,
  message: '<!channel> Lunch is over. Video Lecture Time.'
});

events.push({
  when: date('W1D3', 16, 15),
  who: c.juniors,
  message: '<!channel> 15 Minutes until TownHall. Post your questions at https://townhall.makerpass.com'
});

events.push({
  when: date('W1D3', 16, 25),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D3', 16, 29),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D3', 16, 55),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Shepard Overview. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D3', 16, 59),
  who: c.juniors,
  message: '<!channel> 1 Minute until Shepard Overview. https://zoom.us/j/685772​608'
});

events.push({
  when: date('W1D3', 18, 30),
  who: c.juniors,
  message: '<!channel> Dinner is over. Video Lecture Time.'
});

module.exports = events;
