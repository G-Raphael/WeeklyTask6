const emailAddr = document.querySelector('#email');
const phoneNo = document.querySelector('#phone');
const whatsApp = document.querySelector('#whatsapp');

emailAddr.addEventListener("click", emailResponse);
function emailResponse(){
    alert(`My Email is: emefekeraphael@gmail.com`);
   
}
phoneNo.addEventListener("click", phoneNoResponse);
function phoneNoResponse(){
    alert(`My Phone Number is: 08101266528`);
    
}
whatsApp.addEventListener("click", whatsAppResponse);
function whatsAppResponse(){
    alert(`You can chat me up via this Number:08101266528`);
    
}
