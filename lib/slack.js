'use strict';

var Slack = require('slack-client');

var token = '' || process.env.SLACK_API_TOKEN;

module.exports = new Slack(token, true, true);
