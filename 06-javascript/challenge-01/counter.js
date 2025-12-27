let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let reset=document.getElementById("reset");
let h1=document.querySelector("h1")
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");


let count=0;

btn1.addEventListener("click",()=>{
    count=count-1
    if(count<0){
        count=0;
    }
    if(count>0){
    h1.innerText=count;
    h1.style.color="green";
    }
    if(count==0){
        h1.innerText=count;
        h1.style.color="black"
    }
})
btn2.addEventListener("click",()=>{
    count=count+1;
    if(count>0){
    h1.innerText=count;
    h1.style.color="green";
    }
})
reset.addEventListener("click",()=>{
    count=0;
    h1.innerText=count;
})
btn3.addEventListener("click",()=>{
    count=count+1;
        if(count>0){
    h1.innerText=count;
    h1.style.color="green";
    }
})
btn4.addEventListener("click",()=>{
    count=count+5;
        if(count>0){
    h1.innerText=count;
    h1.style.color="green";
    }
})
btn5.addEventListener("click",()=>{
    count=count+10;
        if(count>0){
    h1.innerText=count;
    h1.style.color="green";
    }
})