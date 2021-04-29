const form = document.getElementById("form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmation = document.getElementById('password2');
const checkbox = document.getElementById("checkbox")

function check(){
  const firstNameValue =  firstName.value
  const lastNameValue = lastName.value
  const usernameValue = username.value
  const emailValue = email.value
  const passwordValue = password.value
  const confirmationValue = confirmation.value

  if(firstNameValue === ''){
    firstName.style.border = "1px solid red"
    firstName.style.borderRadius = "5px"
  }
  else{
    firstName.style.border = "none"
  }
  if(lastNameValue === ''){
    lastName.style.border = "1px solid red"
    lastName.style.borderRadius = "5px"
  }else{
    lastName.style.border = "none"
  }
  if(usernameValue === ''){
    username.style.border = "1px solid red"
    username.style.borderRadius = "5px"
  }else {
    username.style.border = "none"
  }
  if(emailValue === '' || !EmailCheck(emailValue)){
    email.style.border = "1px solid red"
    email.style.borderRadius = "5px"
  }else {
    email.style.border = "none"
  }
  if(passwordValue === '' || passwordValue.length < 8 ) {
    password.style.border = "1px solid red"
    password.style.borderRadius = "5px"
  }else {
    password.style.border = "none"
  }
  if(confirmationValue == '' || confirmationValue != passwordValue){
   confirmation.style.border = "1px solid red"
   confirmation.style.borderRadius = "5px"
  }else{
    confirmation.style.border = "none"
  }
  if(firstName.style.border == "none" && lastName.style.border == "none" && username.style.border == "none" && email.style.border =="none" && password.style.border == "none" && confirmation.style.border == "none"){
    window.location.href = "page3.html"
  }
}
function EmailCheck(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
const btn = document.getElementById("signinLogin")
btn.addEventListener("click", check)