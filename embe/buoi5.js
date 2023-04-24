var numbers = [2,3,4,5,6,7,9,10,11,13,17,18,19,20,25,55,88];
function nguyento(array){
   var songuyen = [];
   for(let i=0;i<array.length;i++){
      var a = array[i]%2;
      var b = array[i]%3;
      var c = array[i]%5;
      var d = array[i]%7;
      var nguyen = array[i];
      if(nguyen==2||nguyen==3||nguyen==5||nguyen==7){
         songuyen.push(nguyen);
      }else if(nguyen!=1 && a!=0 && b!=0 && c!=0 && d!=0){
         songuyen.push(nguyen);
      }
   }
   return songuyen;
}
console.log(nguyento(numbers));

//
function isPrime(number){

}

// function isPrime(num) {
//    if (num < 2) return false;
//    for (let i = 2; i <= Math.sqrt(num); i++) {
//      if (num % i === 0) {
//        return false;
//      }
//    }
//    return true;
//  }
//BTVN
//var numbers = [1,2,3,4,5,6,7,9,10,11,13,17,19,20,25,55,88];

function haimuoi(array, target){
   var sumtar = [];
   var haim = 0;
    for(let i=0; i<array.length; i++){
       for(let j=i+1;j<array.length; j++){
         haim = array[i]+ array[j];
         if(haim==target){
            sumtar.push(array[i]);
            sumtar.push(array[j]);
            }
         }
      }
      return sumtar;
   } 
console.log(haimuoi(numbers, 20));
//