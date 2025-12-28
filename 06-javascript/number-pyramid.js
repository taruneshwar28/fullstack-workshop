let n=5;
let t="1";
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n;j++){
        if(j==n-i-1){
            let x=parseInt(t)*parseInt(t)
            row+=String(x)
            t+="1"
        }
        else{
            row+=" ";
        }
    }
    console.log(row);
}
