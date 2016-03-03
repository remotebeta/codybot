// 'use strict';

var slack = require('./slack.js');

var channels = {};

// Student General Slack Channels
channels.general = slack.students.getChannelGroupOrDMByName('general');
channels.test = slack.students.getChannelGroupOrDMByName('codydaig');

// Studnet Cohort Specific Channels
channels.hrr11 = slack.students.getChannelGroupOrDMByName('hrr11');
channels.hrr12 = slack.students.getChannelGroupOrDMByName('hrr12');
channels.hrr13 = slack.students.getChannelGroupOrDMByName('hrr13');
channels.hrr14 = slack.students.getChannelGroupOrDMByName('hrr14');
channels.hrr15 = slack.students.getChannelGroupOrDMByName('hrr15');

channel.staff_jrs = slack.staff.getChannelGroupOrDMByName('codybot_jrs');
channel.staff_srs = slack.staff.getChannelGroupOrDMByName('codybot_srs');

// Student Combo Channels
channels.seniors = [channels.hrr12, channels.hrr13, channel.staff_srs];
channels.juniors = [channels.hrr14, channels.hrr15, channel.staff_jrs];
channels.students = channels.seniors.concat(channels.juniors);

module.exports = channels;
