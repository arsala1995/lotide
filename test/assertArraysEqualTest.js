

const assertArraysEqual = require('../assertArraysEqual');

const eqArrays  = require('../eqArrays');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));

assertArraysEqual(eqArrays([1, 2, 3], [4, 2, 1]));