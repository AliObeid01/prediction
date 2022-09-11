const sign_up=document.getElementById("signup");
const username=document.getElementById("username");
const password=document.getElementById("password");
const error_message=document.getElementById("empty");


sign_up.addEventListener('click', signup);


function signup() {

        if(username.value.length == 0){
            error_message.innerHTML=`Please enter a username!`  
    
        }else if(password.value.length == 0){
            error_message.innerHTML=`Please enter a password!`  
    
        }else if(username.value.length == 0 && password.value.length == 0){
            error_message.innerHTML=`Please enter username and password!`
    
        }else{
            localStorage.setItem('username', username.value);
            localStorage.setItem('password', password.value);
            document.location.pathname = 'C:/Users/user/prediction/login.html';
        }
    }


