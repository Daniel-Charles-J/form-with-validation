'use strict'
let form = document.getElementById('form');
let userName=document.getElementById('name');
let email=document.getElementById('email');
let password= document.getElementById('password');
let confirmPassword=document.getElementById('confirmPassword');

//show error
const showError=function(input,message){
        let formElement=input.parentElement;
        formElement.classList="error";
        let small=document.querySelector('small');
        small.innerText=message;

}
const showSuccess=function(input){
    let formElement=input.parentElement;
        formElement.classList='form-control success';
}

form.addEventListener('submit',function(event){
    console.log("submited");
    event.preventDefault();
    if(userName.value.trim()==''){
        showError(userName,'User name is required');
    }else{
       showSuccess(userName); 
    }
});