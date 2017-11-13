var Firebase = require('firebase');

module.exports.getFBCardsHandle = function() {
  var rootUrl = 'https://m-diary.firebaseio.com/';

  return new Firebase(rootUrl + 'cards/');
}
