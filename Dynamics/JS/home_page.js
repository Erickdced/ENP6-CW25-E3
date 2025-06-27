document.addEventListener('DOMContentLoaded', function()
{
    const username_link = this.getElementById('nav_username');
    let username = getUsername();

    if(username == '')
        username_link.innerText = "Mi Usuario";
    else
        username_link.innerText = username;
    

});
