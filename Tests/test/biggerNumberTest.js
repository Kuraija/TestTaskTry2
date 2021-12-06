const biggerNumber = require (`../biggerNumber`);
const assert = require (`chai`).assert;

describe('biggerNumber Test', function (){

if ('should return first number', function(){

assert.equal(biggerNumber.biggerNumber(1,7), 1);

});
})