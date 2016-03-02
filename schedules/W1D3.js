// 'use strict';

var c = require('../lib/channels.js');

var events = [];

events.push({
  when: new Date(2016, 02, 02, 09, 30, 0),
  who: c.juniors,
  message: '<!channel> Half Way through your Self Assessment. Don\'t forget to attempt all prompts!'
});

events.push({
  when: new Date(2016, 02, 02, 09, 50, 0),
  who: c.juniors,
  message: '<!channel> 10 minutes remaining. Start wrapping up loose ends!'
});

events.push({
  when: new Date(2016, 02, 02, 09, 55, 0),
  who: c.juniors,
  message: '<!channel> 5 minutes remaining. Get your Pull Requests In!'
});

events.push({
  when: new Date(2016, 02, 02, 10, 00, 0),
  who: c.juniors,
  message: '<!channel> Congrats! SA0 is over. Time for video lectures. '
});

events.push({
  when: new Date(2016, 02, 02, 12, 10, 0),
  who: c.juniors,
  message: '<!channel> 5 minutes until Kitchen Time.'
});

events.push({
  when: new Date(2016, 02, 02, 12, 14, 0),
  who: c.juniors,
  message: '<!channel> 1 minute until Kitchen Time.'
});

events.push({
  when: new Date(2016, 02, 02, 13, 30, 0),
  who: c.juniors,
  message: '<!channel> Lunch is over. Video Lecture Time.'
});

events.push({
  when: new Date(2016, 02, 02, 16, 15, 0),
  who: c.juniors,
  message: '<!channel> 15 Minutes until TownHall. Post your questions at https://townhall.makerpass.com'
});

events.push({
  when: new Date(2016, 02, 02, 16, 25, 0),
  who: c.juniors,
  message: '<!channel> 5 Minutes until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: new Date(2016, 02, 02, 16, 29, 0),
  who: c.juniors,
  message: '<!channel> 1 Minute until TownHall. https://zoom.us/j/685772​608'
});

events.push({
  when: new Date(2016, 02, 02, 16, 55, 0),
  who: c.juniors,
  message: '<!channel> 5 Minutes until Shepard Overview. https://zoom.us/j/685772​608'
});

events.push({
  when: new Date(2016, 02, 02, 16, 59, 0),
  who: c.juniors,
  message: '<!channel> 1 Minute until Shepard Overview. https://zoom.us/j/685772​608'
});

events.push({
  when: new Date(2016, 02, 02, 18, 30, 0),
  who: c.juniors,
  message: '<!channel> Dinner is over. Video Lecture Time.'
});

module.exports = events;
