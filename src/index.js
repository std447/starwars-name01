const starWarsNames = require('./starwar-names.json');
const uniqueRandomArray  = require('unique-random-array');


module.exports = {
  all:starWarsNames,
  random:uniqueRandomArray(starWarsNames)
};