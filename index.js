const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqArraysRecursive = require('./eqArraysRecursive');
const eqObjects = require('./eqObjects');
const eqObjectsRecursive = require('./eqObjectsRecursive');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetter: countLetter,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqArraysRecursive: eqArraysRecursive,
  eqObjects: eqObjects,
  eqObjectsRecursive: eqObjectsRecursive,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without
};
