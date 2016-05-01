'use strict';

module.exports = {
  botChoice: function(playerChoice) {
    var i = this.choices.indexOf(playerChoice);
    var otherChoices = this.choices.slice();

    otherChoices.splice(i, 1);
    return otherChoices[Math.round(Math.random() * 3)];
  },

  judgeWinner: function(playerChoice, botChoice) {
    return this.winLogic[playerChoice](botChoice);
  },

  choices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],

  winLogic: {
    rock: function(botChoice) {
      if (botChoice === 'lizard' || botChoice === 'scissors') {
        return true;
      }
      return false;
    },
    paper: function(botChoice) {
      if (botChoice === 'rock' || botChoice === 'spock') {
        return true;
      }
      return false;
    },
    scissors: function(botChoice) {
      if (botChoice === 'lizard' || botChoice === 'paper') {
        return true;
      }
      return false;
    },
    lizard: function(botChoice) {
      if (botChoice === 'spock' || botChoice === 'paper') {
        return true;
      }
      return false;
    },
    spock: function(botChoice) {
      if (botChoice === 'rock' || botChoice === 'scissors') {
        return true;
      }
      return false;
    }
  }
};
