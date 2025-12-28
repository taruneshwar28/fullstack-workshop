let choice=prompt("Choose one:\n 1.celsius to fahrenheit\n 2.fahrenheit to celsius")
if(choice==1){
    let temp=prompt("Enter temperature value:")
    let f=(temp*9/5)+32
    console.log(f);
}
if(choice==2){
    let temp=prompt("Enter temperature value:")
    let c=(temp-32)*5/9
    console.log(c);
}