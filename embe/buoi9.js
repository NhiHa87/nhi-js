function ana(tr1 = '', tr2 = ''){
    var check1 = tr1.split('');
        check1 = check1.sort();
    var a = check1.join('');
    var check2 = tr2.split('');
        check2 = check2.sort();
    var b = check2.join('');   
        if(a==b){
            return true;
        }else{
            return false;
        }
    }   
 
console.log(ana('part','crap'));
