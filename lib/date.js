// 'use strict';

var dates = {};
var start = new Date(2016, 03, 18, 0, 0, 0); // Feb 29th

buildDates();

module.exports = date;

function buildDates() {
  for(var w=1; w < 7; w++) {
    for(var d=1; d < 8; d++) {
      dates['W' + w + 'D' + d] = new Date(start);
      dates['W' + (w+6) + 'D' + d] = new Date(start);
      start = new Date(start);
      start.setDate(start.getDate() + 1);
    }
  }
}

function date(hrdate, hour, minute) {
  var result = new Date(dates[hrdate]);
  result.setHours(hour);
  result.setMinutes(minute);
  result.setSeconds(1);
  return result;
}
