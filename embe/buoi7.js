function random(number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var ramdomStr = '';
    var x;
    for (let i = 0; i < number; i++) {
        x = Math.floor(Math.random() * characters.length);
        ramdomStr = ramdomStr + characters.charAt(x);
    }
    return ramdomStr;
}
console.log(random(7));

function minmax(number1,number2){
    var a = number2-number1;
    var mima = Math.floor(Math.random()*a+number1);
    return  mima;
}
console.log(minmax(20,45));

function Arr(numLength,numMax){
    var numberA = [];
    for(let i=0;i<numLength;i++){
        numberA[i] = Math.floor(Math.random()*numMax)+1 ;
    }
    return numberA;
}
console.log(Arr(10,5));
//Nhi