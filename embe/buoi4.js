var numbers = [1,2,3,4,5,6,7,9,10,20,25,55,88];

function sum(a){
   var tong=0;
    for(let i=0;i<a.length;i++){
      var chan = a[i]%2;
      if(chan==0){
         tong=tong+a[i];
      }
    }
   return tong;
}
console.log(sum(numbers));
//////
var name = ['ha','nhi','nhinhi','haha','huchuc'];
function name1(str){
   for (let i=0;i<str.length;i++){
      str[i]=str[i].toUpperCase();
   }
   return str;
}
console.log(name1(name));
console.log(name);

//https://www.facebook.com/102930202020202
var link = "https://www.facebook.com/102930202020202";
function links(str){
   var link1 = str.split('/');
   var link2 = link1[3].split('');
   console.log(link1);
   console.log(link2);
   var tong3 = 0;
   for (let i=0;i<link2.length;i++){
      tong3 = tong3 + Number(link2[i]);
   }
   return tong3;
}
console.log(links(link));

//chia het cho 5, tong so chia het cho 2 thi show ra
function chia5(numb){
   var tong52 = 0;
   var tong5 = 0;

   for(let i=0;i<numb.length;i++){
      var tron5 = numb[i]%5;
      var so25 = numb[i]%2;
      //console.log(tron5);
      
      if (tron5==0 && so25==0){

            tong52=tong52 + numb[i];
         }
      } 
      return tong52;
   }
 
console.log(chia5(numbers));