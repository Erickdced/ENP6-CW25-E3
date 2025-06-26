const username = document.getElementById('header_text_user');
   

document.addEventListener("DOMContentLoaded", ()=>
{
    if (getUsername() == '')
        username.innerHTML = 'Invitado'
    else
        username.innerHTML = getUsername();

});