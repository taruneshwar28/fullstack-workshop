function validatePassword(password) {
    let isValid=false;
    let up=0;
    let lo=0;
    let num=0;
    let sp=0;
    let error=[];
    let suggestions=[];   
    if(password.length<8){
        error.push('Too short');
    }
    for(i of password){
        if(i==i.toUpperCase()){
            up++;
        }
        if(i==i.toLowerCase()){
            lo++;
        }
        if (/\d/.test(i)){
            num++;
        }
        else{
            sp++;
        }
    }
    if(up==0){
        error.push('Need at least one uppercase');
        suggestions.push('Add uppercases');
        }
    if(lo==0){
       error.push('Need at least one lowercase');
        suggestions.push('Add lowercases')
    }
    if(num==0){
        error.push('Need at least one number')
        suggestions.push('Add numbers');
    }
    if(sp==0){
        suggestions.push('Add special character');
        error.push('Add at least one special character')
    }
    if(error.length==0){
        isValid=true;
    }
        let obj={valid:isValid,errors:error,suggestion:suggestions}
        return obj;

}

console.log(validatePassword('abc'));

console.log(validatePassword('MyP@ssw0rd!2024'));
