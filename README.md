# codybot

## How to add a command:
  - create a `.js` file in the `commands/` directory using the below code as a reference
```
'use strict';

module.exports = function example(controller) {
  controller.hears('example', ['direct_mention'], function(bot, message) {
    bot.reply(message, 'You just executed the example command!');
  });
}
```

