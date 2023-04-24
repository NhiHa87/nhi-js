

//bai 1
const name = "HA THI YEN NHI";
console.log("Ten cua nguoi bi khinh khi la:",name);

//bai2
var numb1= 4;
let numb2= 0;
console.log('tong la:',numb1+numb2);
console.log('hieu:',numb1-numb2);
console.log('tich:',numb1*numb2);
console.log('thuong:',numb1/numb2);

//bai3
var isRain= false;
if(isRain){
    console.log('Minh Quy di tam mua');
}
else{console.log('dung')};
var isRain= true;
if (isRain){
    console.log('Minh Quy van di tam thoi hihi');
}
// bab tap tap 2023/03/26
//1: 
var password = 'nhihanhiha'; 
var checkPass = password.length;
if (checkPass <8){
    console.log('Password phải có ít nhất 8 ký tự.');
}else{
    console.log('Password được chấp nhận.');
}

//2

var age = 8;
if(age<18){
    console.log('Van con la be hoi');
}else{
    console.log('ban da la ng co the un ruou roi');
}

//3
var fruit = 'bo';
switch(fruit){
    case 'tao' :
        console.log('tao co mau do hoac xanh da troi');
        break;
    case 'cam' :
        console.log('cam mau dzang');
        break;
    case 'bo':
        console.log('bo mau xanh ruot vang cua Nhi');
        break;     
}
