
//----------------------Task 1
// Create a function that returns bigger number of two biggerNumber(a, b)
// Input is a positive integer.

function biggerNumber(numberA, numberB){
    if (numberA > numberB){
        return numberA;
    }
    else if (numberA < numberB){
        return numberB;
    }
    else{
        //they are equal, so it doesn't matter which to return
        return numberA;
    }
}

//console.log('function biggerNumber: ', biggerNumber(A,B));


// Create a function that calculates the number of different squares in an n * n square grid. 
// Input is a positive integer.

function numberSquares(gridSide){
    if (gridSide == 0) {
        return 0;
    }
    return gridSide*gridSide + numberSquares(gridSide - 1);
}

//console.log('function numberSquares: ', numberSquares(gs));

//Task 2!
//Export module functions numberSquares(n), biggerNumber(a, b)
module.exports = [biggerNumber, numberSquares]; //export as an array
;







 