let username= document.getElementById('username');
let password= document.getElementById('password');
let flag=1;

function validationFrom() {
    if (username.value== "") {
        document.getElementById('usererror').innerHTML="Please fill your userid"
        flag=0;
      
    } else if (username.value.length<5) {
        document.getElementById('usererror').innerHTML="Please fill min 5 char"
        flag=0;
    }
     else{
        document.getElementById('usererror').innerHTML=""
        flag=1;
    }
    if (password.value== "") {
        document.getElementById('passerror').innerHTML="Please fill your password"
        flag=0;
      
    } else{
        document.getElementById('passerror').innerHTML="Please fill your password"
        flag=1;
    }

    if(flag){
          return true;
    }
    else{
        return false;
  }
}