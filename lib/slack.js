'use strict';

var Slack = require('slack-client');
var env = require('../env.json');

// var token = '' || process.env.SLACK_API_TOKEN;
// var staff_token = process.env.STAFF_SLACK_API_TOKEN;

exports.students = new Slack(env.token, true, true);

// console.log(Slack.prototype);

// if(staff_token) {
//   exports.staff = new Slack(staff_token, true, true);
// }
