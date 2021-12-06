function numberSquares(gridSide){
    if (gridSide == 0) {
        return 0;
    }
    return gridSide*gridSide + numberSquares(gridSide - 1);
}

module.exports.numberSquares = numberSquares;