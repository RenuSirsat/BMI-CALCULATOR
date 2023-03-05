function calc_btn(){
    document.getElementById('info').style.display="block"
    let Height = document.getElementById('Height').value
    let Weight = document.getElementById('Weight').value
    if(Weight == " " || Weight <= 0 || Height == " "|| Height <= 0){
    document.getElementById('Height_error').innerHTML
    document.getElementById('Weight_error').innerHTML 


}
const bmi=(Weight / (Height/100 * Height/100));
if(bmi <= 18.5)
{
    document.getElementById('bmi').innerHTML = "BMI - Underweight: " + bmi.toFixed(2)
    document.getElementById('Height_error').innerHTML=" "
    document.getElementById('Weight_error').innerHTML=" " 
}
else if(bmi >= 18.6 && bmi < 24.9)
{
    document.getElementById('bmi').innerHTML = "BMI -Normal: "+ bmi.toFixed(2)
    document.getElementById('Height_error').innerHTML=" "
    document.getElementById('Weight_error').innerHTML =" "
}
else if(bmi >= 25.0)
{
    document.getElementById('bmi').innerHTML = "BMI -Overweight: "+ bmi.toFixed(2)
    document.getElementById('Height_error').innerHTML=" "
    document.getElementById('Weight_error').innerHTML=" "

}
}