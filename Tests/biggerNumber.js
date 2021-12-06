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


module.exports.biggerNumber = biggerNumber;