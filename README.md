# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @dfhou29/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: gets the first element of an array.
* `middle(array)`: gets the middle element(s) of an array.
* `tail(array)`: gets all element(s) of an array except for the first element.
* `flatten(array)`: Flattens array a single level deep.
* `takeUntil(array, callback)`: Creates a slice of array with elements taken from the beginning. Elements are taken until callback() returns true.
* `without(array, itemsToRemove)`: Creates an array excluding all given values in itemsToRemove.
* `map(array, callback)`: creates a new array populated with the results of calling callback() on every element in the calling array.
* `letterPosition(string)`: return all the indices in the string where each character is found.
* `findKey(object, properties)`: returns the key of the first element containing the properties.
* `findKeyByValue(object, value)`: gets the associated key of value provided in an object.
* `countOnly(object, objectsToCount)`: return counts for objectsToCount in the object.
* `countLetters(string)`: returns a count of occurrence of each letter in string.
* `eqArrays(array1, array2)`: return true if two arrays are identical.
* `eqArraysRecursive(array1, array2)`: recursive version of eqArrays.
* `eqObjects(object1, object2)`: return true if two objects are identical.
* `eqObjectsRecursive(object1, object2)`: recursive version of eqObjects.
* `assertEqual(actual, expected)`: displays console messages when testing equality of two primitive value.
* `assertArraysEqual(actual, expected)`: displays console messages when testing equality of two arrays. (eqArrays/eqArraysRecursive)
* `assertObjectsEqual(actual, expected)`: displays console messages when testing equality of two Objects. (eqObjects/eqObjectsRecursive)