document.addEventListener("DOMContentLoaded", ()=>
{
    const username_link = document.getElementById('username_link');

    if(getUsername() == '')
        username_link.innerText = "Mi usuario";
    else
        username_link.innerText = getUsername();
});