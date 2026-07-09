// Welcome Message

window.onload=function(){

alert("🎉 Welcome to Don Toys!");

}



// Contact Form Validation

document.addEventListener("DOMContentLoaded",function(){

const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let email=document.getElementById("email").value.trim();

let phone=document.getElementById("phone").value.trim();

let message=document.getElementById("message").value.trim();

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let phonePattern=/^[0-9]{10}$/;



if(name==""){

alert("Please enter your name");

return;

}



if(!email.match(emailPattern)){

alert("Please enter a valid email.");

return;

}



if(!phone.match(phonePattern)){

alert("Phone number should contain exactly 10 digits.");

return;

}



if(message==""){

alert("Please enter your message.");

return;

}



alert("✅ Thank you! Your message has been sent successfully.");

form.reset();

});

}

});



// Shop Buttons

let buttons=document.querySelectorAll("button");

buttons.forEach(function(btn){

btn.addEventListener("click",function(){

if(btn.innerHTML!="Send Message"){

alert("🧸 Product added successfully!");

}

});

});



// Product Card Animation

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseover",function(){

card.style.transform="scale(1.05)";

});



card.addEventListener("mouseout",function(){

card.style.transform="scale(1)";

});

});