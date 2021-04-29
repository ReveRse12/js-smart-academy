const username = document.getElementById("Username")
const password = document.getElementById("signPassword")
const signBtn = document.getElementById("signinLogin")

function check(){
  const usernameValue = username.value 
  const passwordValue = password.value
  if(usernameValue === ''){
    username.style.border = "1px solid red"
    username.style.borderRadius = "5px"
    username.style.marginBottom= "5px"
  }else {
    username.style.border = "none"
  }

  if(passwordValue === '' || passwordValue.length < 8 ){
    password.style.border = "1px solid red"
    password.style.borderRadius = "5px"
  }else {
    password.style.border = "none"
  }
  if(username.style.border != "1px solid red" && password.style.border != "1px solid red"){
    window.location.href="page3.html"
  }
}

signBtn.addEventListener("click" , check)