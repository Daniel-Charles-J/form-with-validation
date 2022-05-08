'use strict'
let form = document.getElementById('form');
let userName=document.getElementById('name');
let email=document.getElementById('email');
let password= document.getElementById('password');
let confirmPassword=document.getElementById('confirmPassword');

const inputArray = [userName,email,password,confirmPassword];

//show error
const showError=function(input,message){
        let formElement=input.parentElement;
        formElement.classList='form-control error';
        let small=document.querySelector('small');
        small.innerText=message;

}
const showSuccess=function(input){
    let formElement=input.parentElement;
        formElement.classList='form-control success';
}
const checkRequired=function(inputArray){
    inputArray.forEach((input)=>{
        console.log(input);
        if(input.value.trim()===''){
            showError(input,`${input.name} is Required`);
        }else{
            showSuccess(input);
        }
    });
};

form.addEventListener('submit',function(event){
    console.log("submited");
    event.preventDefault();
    checkRequired(inputArray);
});