function numberToString(input){
 
    let str = '', temp;

    while (input > 0) {
        temp = (input - 1) % 26;
        str = String.fromCharCode(65 + temp) + str;
        input = (input - temp)/26 | 0;
    }
    return str


    
}
  
//pass input number here 
let number=703
console.log(numberToString(number))