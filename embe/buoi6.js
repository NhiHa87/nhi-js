// numbers = [1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 17, 19, 20, 25, 55, 88];
// function haimuoi(array, target) {
//     const obj = {};
//     for (let i = 0; i < array.length; i++) {
//         var check = target - array[i];
//         if (obj[array[i]]) {
//             return [obj[array[i]], i];
//         }  
//         obj[check] = i;
//     }
// }

// function haimuoi1(array, target) {
//     const obj = {};
//     for (let i = 0; i < array.length; i++) {
//         var check = target - array[i];
//         obj[i]=check;
//         if(obj[i]=check){
//             var can = 
//         }

//         }
//     }
// }


// var obj = {
//     name: "Nhi",
//     age: 31,
//     boyfriends: [1, 2, 3, 5],
// }
// const bf = obj['boyfriends'];
// const bf1 = obj.boyfriends[0];
// console.log(obj);
// obj.company = 'AA';
// console.log(obj);
// obj['exboyfriends'] = 'BBB';
// console.log(obj);

//console.log(haimuoi(numbers, 9));

var obj = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}
function roman(str){
    var romanch = str.split('');
    var numberR = 0;
    for (let i=0; i<romanch.length; i++){  
        if(obj[romanch[i]]){
            numberR = numberR + obj[romanch[i]];
        }
    }
    
    return numberR;
    //return romanch;
}

console.log(roman('MDLVI'));

var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

//console.log(check[0]);
function checkR (number){
    var check = Object.values(obj);
    var a;
    var b;
    var c;
    var d;
    for(let i=0;i<check.length;i++){
        a = number-check[i];
        if(a==0){
            c = c + obj(check[i]);
        }else if(a>0){
            for(let j=0;j<check.length;j++){
            
            }
        }
        
    }
}



// function roman(str) {
//     //var romanch = str.split('');
//     var numberR = 0;
//     for (let i = 0; i < str.length; i++) {
//         if ((obj[str[i]]) < (obj[str[i + 1]])) {
//             numberR = numberR - obj[str[i]];
//         } else {
//             numberR = numberR + obj[str[i]];
//         }
//     }
//     //console.log(numberR);
//     return numberR;
//     //return romanch;
// }
// console.log(roman('IV'));
//2345


// var numbers = [2,3,4,5,6,7,9,10,11,13,17,18,19,20,25,55,88];
// function tong(number,target){
//     var obj = {};
//     var check;
//     for(let i=0;i<number.length;i++){
//         check = target - number[i];
//         if(obj[number[i]]){
//            return [obj[number[i]],i]; 
//         }else{
//            obj[check] =  i;  
//         }
//     }
    
// }
// console.log(tong(numbers,10));
console.log(tong(numbers,10));