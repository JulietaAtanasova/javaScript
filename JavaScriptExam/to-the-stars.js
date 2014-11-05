function solve(input){
    var firstStarSystem, secondStarSystem, thirdStarSystem, normandy, n, xN, yN, xFsS, yFsS, xSsS, ySsS, xTsS, yTsS, result;
    firstStarSystem= input[0].split(' ');
    secondStarSystem = input[1].split(' ');
    thirdStarSystem = input[2].split(' ');
    normandy = input[3].split(' ');
    n = parseInt(input[4]);

    xN = Number(normandy[0]);
    yN = Number(normandy[1]);

    xFsS = Number(firstStarSystem[1]);
    yFsS = Number(firstStarSystem[2]);

    xSsS = Number(secondStarSystem[1]);
    ySsS = Number(secondStarSystem[2]);

    xTsS = Number(thirdStarSystem[1]);
    yTsS = Number(thirdStarSystem[2]);

    result = '';
    for (var i = 0; i <= n; i++) {
        if(isInRectangle(xFsS, yFsS, xN, yN)){
            result = firstStarSystem[0].toLowerCase();
        }
        if(isInRectangle(xSsS, ySsS, xN, yN)){
            result = secondStarSystem[0].toLowerCase();
        }
        if(isInRectangle(xTsS, yTsS, xN, yN)){
            result = thirdStarSystem[0].toLowerCase();
        }
        if(result != ''){
            console.log(result);
        }else {
            console.log('space');
        }
        yN++;
        result = '';
    }

    function isInRectangle(x, y, xN, yN){
        if ((xN >=  x - 1) && (xN <= x + 1) &&
            ((yN >= y - 1) && (yN <= y + 1))){
            return true;
        } else {
            return false;
        }
    }
}

solve(['Sirius 3 7',
        'Alpha-Centauri 7 5',
        'Gamma-Cygni 10 10',
        '8 1',
        '6'
]);

console.log();
solve(['Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'
]);
