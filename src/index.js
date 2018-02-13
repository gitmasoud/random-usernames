var uniqueRandomArray = require('unique-random-array');
var usernames = require('./usernames.json');
import {version} from './package.json';


module.exports = {
    all: usernames,
    random: uniqueRandomArray(usernames)
};