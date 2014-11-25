function solve(args) {
    var item,
        strDate,
        dateParts,
        date,
        min = new Date("January 1, 1900"),
        breakPoint = new Date("May 25, 1973"),
        max = new Date("January 1, 2015"),
        dateArray = [];

    for (item in args) {
        strDate = args[item];
        dateParts = strDate.split('.');
        date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
        if (date > min && date < max) {
            dateArray.push(date);
        }
    }

    if (typeof dateArray === 'undefined' || dateArray.length <= 0) {
    	console.log('No result');
    	return;
    }

    if(dateArray.length === 1) {
    	printResult(dateArray[0], dateArray[0] > breakPoint ? 'fan' : 'hater');
    	return;
    }

	dateArray.sort(function(a, b) {
        return a.getTime() - b.getTime();
    });
    printResult(dateArray[dateArray.length - 1], 'fan');
    printResult(dateArray[0], 'hater');
    

    function printResult(date, type) {
        console.log('The biggest ' + type + ' of ewoks was born on ' + date.toDateString());
    }

}

solve(['22.03.2014', '17.05.1933', '10.10.1954']);
console.log();
solve(['22.03.2014', '22.03.2014']);
console.log();
solve(['22.03.2000', '22.03.1700']);
console.log();
solve(['21.12.1966']);
console.log();
solve(['22.03.1700', '01.07.2020']);
