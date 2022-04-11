function test(inteiros){
    temp = 0, temp2 = 0;
    for(index =0; index < inteiros.length; index += 1){
        if(inteiros[index] > temp){
            temp = inteiros[index];
            temp2 = index;
        }
        
    }
    console.log('o maior numero é ' + temp + ' o índice dele é ' + temp2);
}

let intArray = [2, 3, 6, 7, 10, 1];

test(intArray);