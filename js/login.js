const login=document.getElementById("login");
const name=document.getElementById("name");
const pass=document.getElementById("pass");
const error_message=document.getElementById("empty");

login.addEventListener('click', log_in);

function log_in() {

    var storedusername = localStorage.getItem('username');
    var storedpassword= localStorage.getItem('password');
    
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value ;
    
    if(name == storedusername && pass== storedpassword){
        document.location.pathname = 'C:/Users/user/prediction/index.html';
    }else{
        error_message.innerHTML=`Login failed!`
    }
}


