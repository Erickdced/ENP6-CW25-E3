const username = document.getElementById('header_text_user');

const change_username_button = document.getElementById('changeNameBtn'); 
const change_pfp_button = document.getElementById('changeNameBtn');

document.addEventListener("DOMContentLoaded", ()=>
{
    if (getUsername() == '')
        username.innerHTML = 'Invitado'
    else
        username.innerHTML = getUsername();

    /*Modifying username or pfp*/
    change_username_button.addEventListener("click", ()=>
    {
        const change_username_input = document.getElementById('changeNameInput');
        
        if (change_username_input.style.display == "block")
            change_username_input.style.display = "none";
        else
            change_username_input.style.display = "block";

        change_username_input.addEventListener("change", ()=>
        {
            if(change_username_input.value != '')
            {
                setCookie("username", change_username_input.value, 7);
                username.innerHTML = change_username_input.value;
            }
        });

        change_username_input.removeEventListener("change");
    });
    change_pfp_button.addEventListener("click", ()=>
    {

    });
});