'use strict';

var Slack = require('slack-client');

var token = '' || process.env.SLACK_API_TOKEN;

var slack = new Slack(token, true, true);

slack.on('open', function () {
  console.log("Connected to ", slack.team.name, "  as @", slack.self.name);
});

slack.on('message', function (message) {
  console.log(message);
});

slack.on('error', function (err) {
  console.error(err);
});

slack.login();
