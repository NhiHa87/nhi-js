function randomDay(){
    var today = new Date();
    var day = new Date() - new Date('1970-01-01');//
    var ranDay = Math.floor(Math.random()*day);
    var theday = new Date(ranDay);
    return theday;
}
  console.log(randomDay());
//Write a function that takes a string as input and returns a new string with all the vowels (a, e, i, o, u) removed.
function take(str){
  var check = ['a', 'e', 'i', 'o', 'u'];
  var takeTrs = '';
  for(let i=0;i<str.length;i++){
    if(check.includes(str[i])){
      takeTrs = takeTrs;
    }else{
      takeTrs = takeTrs + str[i];
    }
  }
  return takeTrs;
}
console.log(take('ghetQuynhiu'));
//var str = 'yeuNhi';
//console.log(take(str));
//tong tu 1 den 10
function sum(number){
  var tong = 0;
  for(let i=0;i<=number;i++){
    tong = tong +i;
  }
  return tong;
}
console.log(sum(1000));

function reverded(str){
  var a = '';
 // var b = str.length;
  //console.log(b);
  for(let i = str.length-1;i>=0;i--){
    //khi i = 5 , neu ddk laf i<0 thif se k chay dc
    a = a + str[i];
    //console.log(a);
  }
  return a;
}
console.log(reverded('abcdef'));

//Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.
function upto(strs){
  var b = '';
  for(let i=0;i<strs.length;i++){
    if(i==0){
      b = b + strs[i].toUpperCase();
    }else{
      b = b + strs[i];
    }
  }
  return b;
}
console.log(upto('nhihaha'));
// var a = 'nhiha';
// var b = a.split('');
// b[0] = b[0].toUpperCase();
// console.log(b.join(''));
