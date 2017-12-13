var axios = require('axios');

var slackApi = {};

var api = axios.create({
  baseURL: 'https://slack.com/api/'
});

slackApi.getChannelName = function(channelID, controller) {
  return api.get(`channels.info?token=${controller._token}&pretty=1&channel=${channelID}`)
    .then(function (res) {
      return res.channel.name;
    });
};

module.exports = slackApi;