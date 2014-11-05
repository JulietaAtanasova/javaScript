function solve(input){
    var assArr, tempArr, file, extension, mb, fileArr, memory, result;
    assArr = {};
    fileArr = [];

    memory = 'memory';
    for (var i = 0; i < input.length; i++) {
        tempArr = input[i].split(' ');
        file = tempArr[0];
        extension = tempArr[1];
        mb = Number(tempArr[2].substring(0, tempArr[2].length - 2));

        if(!(assArr[extension])){
            assArr[extension]={};
            assArr[extension].files = [];
            assArr[extension].memory = mb;
            assArr[extension].files.push(file);
            assArr[extension].files.sort();
        } else {
            assArr[extension].files.push(file);
            assArr[extension].memory += mb;
            assArr[extension].files.sort();
        }
    }

    var extensionArr = [];
    result = {};

    for (var curExtension in assArr) {
        extensionArr.push(curExtension);
        extensionArr.sort();
        assArr[curExtension][memory] = assArr[curExtension][memory].toFixed(2);
    }

    for (var i = 0; i < extensionArr.length; i++) {
        result[extensionArr[i]]= assArr[extensionArr[i]];
    }

    console.log(JSON.stringify(result));
}

solve(['sentinel .exe 15MB',
    'zoomIt .msi 3MB',
    'skype .exe 45MB',
    'trojanStopper .bat 23MB',
    'kindleInstaller .exe 120MB',
    'setup .msi 33.4MB',
    'winBlock .bat 1MB']);