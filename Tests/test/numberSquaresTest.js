const numberSquares = require (`../numberSquares`);
const assert = require (`chai`).assert;

describe('numberSquares Test', function (){

if ('should return one', function(){

assert.equal(numberSquares.numberSquares(1), 1);

});
if ('should return 14', function(){

    assert.equal(numberSquares.numberSquares(3), 14);
    
    });
if ('should return a number', function(){

    assert.typeOf(numberSquares.numberSquares(1),'number');
});
if ('should return a number, not a text', function(){

    assert.notTypeOf(numberSquares.numberSquares(1),'string');
});
})