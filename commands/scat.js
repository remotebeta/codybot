'use strict';

module.exports = function scat(controller) {
  controller.hears('scat', ['direct_mention'], function(bot, message) {
    // Scatman John YouTube link
    var youtube = 'https://youtu.be/Hy8kmNEo1i8';
    // Giphy of Scatman John
    var giphy = 'http://gph.is/1JaFboi';
    // Scatman Vine by Mariana Machine
    var vine1 = 'https://vine.co/v/ijJA67XqqKv';
    // Scatman Vine link by Waly Dia
    var vine2 = 'https://vine.co/v/OwKpVbaQwEV';

    var media = [youtube, giphy, vine1, vine2];
    var randomOption = Math.floor(Math.random() * media.length);

    var botReply =
`Ski-bi dibby dib yo da dub dub! Yo da dub dub!
Ski-bi dibby dib yo da dub dub! Yo da dub dub!
(I'm the Scatman!)
Ba-da-ba-da-ba-be bop bop bodda bope! Bop ba bodda bope!
Be bop ba bodda bope! Bop ba bodda!
Ba-da-ba-da-ba-be bop ba bodda bope! Bop ba bodda bope!
Be bop ba bodda bope! Bop ba bodda bope!
${media[randomOption]}`;

    bot.reply(message, botReply);
  });
}


