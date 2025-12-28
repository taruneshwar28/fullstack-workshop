let w=prompt("Enter weight in kg")
let h=prompt("Enter heigth in meters")
const BMI=w/(h*h)
if(BMI<18.5){
    alert(`${BMI}---Underweight`)
}
else if(BMI>=18.5 && BMI<=24.9){
    alert(`${BMI}---Normal`)
    alert(`${BMI}---Normal`)
}
else if(BMI>=25 && BMI<=29.9){
    alert("BMI+' '+Overweight")
}
