var axios = require('axios');

var slackApi = {};

var api = axios.create({
  baseURL: 'https://slack.com/api/'
});

slackApi.getChannelName = function(channelID, controller) {
  if(channelID[0] === 'C') {
    return api.get(`channels.info?token=${controller._token}&pretty=1&channel=${channelID}`)
      .then(function (res) {
        console.log('----------------');
        console.log(res);
        console.log('----------------');
        return res.data.channel.name;
      });
  } else if (channelID === 'G') {
    return api.get(`groups.info?token=${controller._token}&pretty=1&channel=${channelID}`)
      .then(function (res) {
        return res.data.group.name;
      });
  } else {
    return Promise.resolve(null);
  }
};

module.exports = slackApi;