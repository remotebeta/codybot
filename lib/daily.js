// 'use strict';

var schedule = require('node-schedule');

var d = {};

d.daily800am = new schedule.RecurrenceRule();
d.daily800am.dayOfWeek = [1,2,3,4,5,6];
d.daily800am.hour = 8;
d.daily800am.minute = 00;

d.daily855am = new schedule.RecurrenceRule();
d.daily855am.dayOfWeek = [1,2,3,4,5,6];
d.daily855am.hour = 8;
d.daily855am.minute = 55;

d.daily859am = new schedule.RecurrenceRule();
d.daily859am.dayOfWeek = [1,2,3,4,5,6];
d.daily859am.hour = 8;
d.daily859am.minute = 59;

d.daily900am = new schedule.RecurrenceRule();
d.daily900am.dayOfWeek = [1,2,3,4,5,6];
d.daily900am.hour = 9;
d.daily900am.minute = 00;

d.daily1230pm = new schedule.RecurrenceRule();
d.daily1230pm.dayOfWeek = [1,2,3,4,5,6];
d.daily1230pm.hour = 12;
d.daily1230pm.minute = 30;

d.daily430pm = new schedule.RecurrenceRule();
d.daily430pm.dayOfWeek = [1,2,3,4,5];
d.daily430pm.hour = 17;
d.daily430pm.minute = 30;

d.daily530pm = new schedule.RecurrenceRule();
d.daily530pm.dayOfWeek = [1,2,3,4,5];
d.daily530pm.hour = 17;
d.daily530pm.minute = 30;

d.daily625pm = new schedule.RecurrenceRule();
d.daily625pm.dayOfWeek = [1,2,3,4,5];
d.daily625pm.hour = 18;
d.daily625pm.minute = 25;

d.daily629pm = new schedule.RecurrenceRule();
d.daily629pm.dayOfWeek = [1,2,3,4,5];
d.daily629pm.hour = 18;
d.daily629pm.minute = 29;

module.exports = d;
