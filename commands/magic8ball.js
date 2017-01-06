'use strict';

module.exports = function magic8ball(controller) {
  controller.hears('magic 8 ball', ['direct_mention'], function(bot, message) {
    var a = Math.floor(Math.random()*20+1);

    if (a===1)
    {
      bot.reply(message, "It is certain.");
    }
    else if (a===2)
    {
      bot.reply(message, "It is decidedly so.");
    }
    else if (a===3)
    {
      bot.reply(message, "Without a doubt.");
    }
    else if (a===4)
    {
      bot.reply(message, "Yes, definitely.");
    }
    else if (a===5)
    {
      bot.reply(message, "You may rely on it.");
    }
    else if (a===6)
    {
      bot.reply(message, "As I see it, yes.");
    }
    else if (a===7)
    {
      bot.reply(message, "Most likely.");
    }
    else if (a===8)
    {
      bot.reply(message, "Outlook good.");
    }
    else if (a===9)
    {
      bot.reply(message, "Yes.");
    }
    else if (a===10)
    {
      bot.reply(message, "Signs point to yes.");
    }
    else if (a===11)
    {
      bot.reply(message, "Reply hazy try again.");
    }
    else if (a===12)
    {
      bot.reply(message, "Ask again later.");
    }
    else if (a===13)
    {
      bot.reply(message, "Better not tell you now.");
    }
    else if (a===14)
    {
      bot.reply(message, "Cannot predict now.");
    }
    else if (a===15)
    {
      bot.reply(message, "Concentrate and ask again.");
    }
    else if (a===16)
    {
      bot.reply(message, "Don't count on it.");
    }
    else if (a===17)
    {
      bot.reply(message, "My reply is no.");
    }
    else if (a===18)
    {
      bot.reply(message, "My sources say no.");
    }
    else if (a===19)
    {
      bot.reply(message, "Outlook not so good.");
    }
    else if (a===20)
    {
      bot.reply(message, "Very doubtful.");
    }
    else
    {
      bot.reply(message, "I have no idea.");
    }
  });
}