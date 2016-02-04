'ust strict';

module.exports = beatbox;

function beatbox(slack, args, message) {
  var channel = slack.getChannelGroupOrDMByID(message.channel);
  channel.send('Boots and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Cats and Boots and Cats and Boots and Cats and Boots and Cats and Boots.');
}
