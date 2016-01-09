'use strict';

var WebClient = require('slack-client').WebClient;
var RtmClient = require('slack-client').RtmClient;

var token = '' || process.env.SLACK_API_TOKEN;

var webClient = new WebClient(token);
var rtm = new RtmClient(webClient, {logLevel: 'debug'});
rtm.start();

rtm.on('message', function (message) {
  console.log(message);
});
