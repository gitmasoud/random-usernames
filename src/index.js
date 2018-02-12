var uniqueRandomArray = require('unique-random-array');
var usernames = require('./usernames.json');


module.exports = {
    all: usernames,
    random: uniqueRandomArray(usernames)
};