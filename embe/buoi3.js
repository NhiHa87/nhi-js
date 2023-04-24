// var name = 'Ha Thi Yen Nhi';
// // tra ve 1 mang, co 4 ky tu Ha Thi Yen Nhi
// var name1 = name.split(' ');
// // ['Ha' ,'Thi', 'Yen', 'Nhi' ]
// console.log(name1);
// var namemoi = '';
// for(let i=0;i<name1.length;i++){
//     if(i<name1.length-1){
//         namemoi = namemoi+name1[i] + '-';
//     }else{
//         namemoi = namemoi+name1[i];
//     }
// }
// console.log(namemoi);
// console.log(name1.join('-'));

var name = "Ha Thi Yen NHi";
function replace(str, index0, index1) {
  var name1 = str.split(' ');
  for(let i=0; i<str.length; i++){
     if(i==index0){
        name1[i]= 'Minh';
     }
     else if(i==index1){
        name1[i]='Quy';
     }
  }
  
  return name1.join(' ');
  //return name1;
  
}
replace(name, 0, 1)
console.log(replace(name, 0, 1));

