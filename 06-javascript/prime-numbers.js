function findPrimes(limit) {
    let arr=[];
    for(let i=2;i<=limit;i++){
        let c=0;
        for(let j=1;j<=i;j++){
            if(i%j==0){
                c++;
            }
        }
        if(c==2){
            arr.push(i);
        }
    }
    return arr
}

console.log(findPrimes(30));