// //2023.03.26
// //mang??
// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// console.log(cars.length)//dem so luong phan tu
// var x = cars.length -1;
// console.log(x)
// console.log(cars,x);
// console.log(cars[x]);
// cars.push('xe xe');//them phan tu vao mang
// console.log(cars);

// //for
// for (let i = 0;i< cars.length ; i++){
//     console.log(cars[i]);
// }

//khai bao 1 mang numbers{1~10}, dungf for check so nao la so chan in ra
// const numberz = [1,2,3,4,5,6,7,8,9,10];
// const numbers1= [];
// for(let i = 0 ;i<numbers.length ;i++){
//     var b= numbers[i];
//     console.log(b);
//     var c= b%2;
//     console.log(c);
//     if(c==0){
//         console.log('so chan la:' + numbers[i] );
//         numbers1.push(numbers[i]);
//     }else{
//         console.log('so le la:'+ numbers[i]);
//     }   
// }

// console.log(numbers1)

//Mang {1~10}, in ra tong tu 1~10

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// var tong=0;
// for(let i = 0;i< numbers.length; i++){
//     tong=numbers[i]+tong;
// }
// console.log('Tong la:'+ tong);

//BTVN
// bài 1: tinhs tong so chan trong ham
var numbers2=[1,2,3,4,5,6,7,88,99];
var tong = 0;
for(let i=0;i<numbers2.length;i++){
    var sochan = numbers2[i]%2;
    if(sochan==0){
        tong=numbers2[i]+tong;
    }

}
console.log('Tong cac so chan la:'+ tong);

//BT2: strings capitalized.
var name = ['ha','nhi','nhinhi','haha','huchuc'];
var nameu = [];
for(let i=0;i< name.length;i++){
    var up = name[i].toUpperCase();
    console.log(up);
    nameu.push(up);
}
console.log(nameu);

//BT3:x2
var numberx2 = [];
for(let i=0;i< numbers2.length;i++){
    var number3 = numbers2[i]*2;
    numberx2.push(number3);
   
}
console.log(numberx2);

//bt4
var name1 = 'HaNhi';
const namenlist = name1.split("");//list ra cac ky tu
var namengc = namenlist.reverse();// tro ngc no lai
console.log(namengc);

//bt5 so lon nhat trong mang
var bunhat = 0;
for(let i=0;i<numbers2.length;i++){
    if(numbers2[i]>bunhat){
        bunhat = numbers2[i];
    }
}
console.log(bunhat);