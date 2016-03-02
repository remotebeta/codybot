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

// Student Combo Channels
channels.seniors = [hrr12, hrr13];
channels.juniors = [hrr14, hrr15];
channels.students = seniors.concat(juniors);

module.exports = channels;
