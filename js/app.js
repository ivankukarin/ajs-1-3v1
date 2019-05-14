'use strict';

var arrayPoints = [74989, 74990, 84990, 62000, 58480, 61800];
console.log(arrayPoints);



var bestPoints = function(array) {
    var max = 0;
    for (var i = 0; i <= array.length - 1; i++) {
        if (max < array[i]) {
        max = array[i];    
        }
    }
    return console.log('Самый лучший балл: ' + max) ;
}

bestPoints(arrayPoints);
