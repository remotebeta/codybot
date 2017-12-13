var axios = require('axios');

var slackApi = {};

var api = axios.create({
  baseURL: 'https://slack.com/api/'
});

slackApi.getChannelName = function(channelID, controller) {
  return api.get(`groups.info?token=${controller._token}&pretty=1&channel=${channelID}`)
    .then(function (res) {
      console.log('----------------');
      console.log(res);
      console.log('----------------');
      return res.data.channel.name;
    });
};

module.exports = slackApi;