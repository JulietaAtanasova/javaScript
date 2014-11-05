function solve (input) {
    var bill, mood, tip, digit;
    bill = Number(input[0]);
    mood = input[1];

    switch (mood){
        case 'happy': tip = (bill * 10)/100;
            break;
        case 'married': tip = (0.05/100) * bill;
            break;
        case 'drunk': tip = (15 * bill)/100;
            digit = parseInt(tip.toString().charAt(0));
            tip = Math.pow(tip, digit);
            break;
        default : tip = (5/100) * bill;
            break;
    }
    console.log(tip.toFixed(2));
}

solve(['1230.83', 'drunk']);