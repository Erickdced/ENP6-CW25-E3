document.addEventListener("DOMContentLoaded", ()=>
{
    const username_link = document.getElementById('nav_username');
    let username = getUsername();

    console.log(getCookie("pfp_id"));

    if(username == '')
        username_link.innerText = "Mi Usuario";
    else
        username_link.innerText = username; 
});