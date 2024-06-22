let form=document.getElementsByClassName('form');

function status(){
    let email=document.getElementById('email');
    if (email.value=="") {
        alert("null string enter valid email");
       return false;
    } else {
       return true;
    }
}


