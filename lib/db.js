'use strict';

var cassandra = require('cassandra-driver');

var auth = new cassandra.auth.PlainTextAuthProvider(process.env.CASSANDRA_USER, process.env.CASSANDRA_PASS);

exports.client = new cassandra.Client({ contactPoints: ['cassandra01.sshbot.com'], authProvider: auth });
exports.insertMessage = insertMessage;
exports.genId = genId;
exports.start = start;

function insertMessage(type, channel, user, text, ts, team) {
  var query = 'INSERT INTO codybot.messages (id, type, channel, user, text, ts, team) VALUES (?, ?, ?, ?, ?, ?, ?)';
  exports.client.execute(query, [genId(), type, channel, user, text, ts, team], {prepare: true}, function (err, result) {
    if(err) {
      console.error(err);
    }
  });
}

function genId() {
  return cassandra.types.Uuid.random();
}

function start(cb) {
  var query;
  exports.client.connect(function (err, result) {
    if(err) {
      console.error(err);
    }
    query = 'CREATE KEYSPACE IF NOT EXISTS codybot WITH replication = { \'class\': \'SimpleStrategy\', \'replication_factor\': \'1\'}';
    exports.client.execute(query, function (err, result) {
      if(err) {
        console.error(err);
      }
      query = 'CREATE TABLE IF NOT EXISTS codybot.messages (id uuid, type text, channel text, user text, text text, ts text, team text, PRIMARY KEY(id))';
      exports.client.execute(query, function (err, result) {
        if(err) {
          console.error(err);
        }
        cb();
      });
    });
  });
}
