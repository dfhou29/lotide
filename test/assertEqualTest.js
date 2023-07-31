const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);

assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");