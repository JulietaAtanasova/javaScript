function solve(input){
    var message, array, hexString, resultArr, result;
    message = input[0];
    array = message.match(/\d+/g);
    array = array.map(Number);
    resultArr = [];
    for (var i = 0; i < array.length; i++) {
        hexString = array[i].toString(16).toUpperCase();
        resultArr.push(hexString);
    }

    for (var i = 0; i < resultArr.length; i++) {
        switch (resultArr[i].length){
            case 1: resultArr[i]  = '0x000'+ resultArr[i];
                break;
            case 2: resultArr[i]  = '0x00'+ resultArr[i];
                break;
            case 3: resultArr[i]  = '0x0'+ resultArr[i];
                break;
            case 4: resultArr[i]  = '0x'+ resultArr[i];
                break;
        }

    }
    
    result = resultArr.join('-');
    console.log(result);
}

solve(['5tffwj(//*7837xzc2---34rlxXP%$".']);