const username = document.getElementById('header_text_user');

const change_username_button = document.getElementById('changeNameBtn'); 
const change_pfp_button = document.getElementById('changeFaceBtn');

document.addEventListener("DOMContentLoaded", ()=>
{
    if (getUsername() == '')
        username.innerHTML = 'Invitado'
    else
        username.innerHTML = getUsername();

    /*===============================MOD USERNAME===================00*/
    change_username_button.addEventListener("click", ()=>
    {
        let change_username_input = document.getElementById('changeNameInput');
        
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
    });
    /*===============================MOD PFP===================00*/
    change_pfp_button.addEventListener("click", ()=>
    {
        let user_pfp_area = document.getElementById('user_pfp_area');
        let current_pfp_id = getCookie("pfp_id");
        
        if(current_pfp_id == "4")
            current_pfp_id = 0;
        else
            current_pfp_id++;

        switch(current_pfp_id)
        {
            case 0:
                user_pfp_area.innerHTML = '<img src="../Statics/Media/img/estrellita_user.png" id="user_img">';
                break;
            case 1:
                user_pfp_area.innerHTML = '<img src="../Statics/Media/img/estrellita_style_1.png" id="user_img">';
                break;
            case 2:
                user_pfp_area.innerHTML = '<img src="../Statics/Media/img/estrellita_style_2.png" id="user_img">';
                break;
            case 3:
                user_pfp_area.innerHTML = '<img src="../Statics/Media/img/estrellita_style_3.jpeg" id="user_img">';
                break;
            case 4:
                user_pfp_area.innerHTML = '<img src="../Statics/Media/img/estrellita_style_4.jpeg" id="user_img">';
                break;
        }

        setCookie("pfp_id", current_pfp_id, 7);
    });
})