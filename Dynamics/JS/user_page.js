const button_mod_username = document.getElementById('changeNameBtn');
const button_mod_picture = document.getElementById('changeFaceBtn');

const display_user_picture = document.getElementById('user_pfp_area');
const display_username = document.getElementById('header_text_user');

/*=======================================Config User==============================*/
function configUserPicture(picture_id)
{   
    
    if(picture_id == '')
        picture_id = 0;

    if(picture_id == 0)
        display_user_picture.innerHTML = '<img src="../Statics/Media/img/estrellita_user.png" id="user_img">';
    else if(picture_id == 1)
        display_user_picture.innerHTML = '<img src="../Statics/Media/img/estrellita_style_1.png" id="user_img">';
    else if(picture_id == 2)
        display_user_picture.innerHTML = '<img src="../Statics/Media/img/estrellita_style_2.png" id="user_img">';
    else if(picture_id == 3)
        display_user_picture.innerHTML = '<img src="../Statics/Media/img/estrellita_style_3.jpeg" id="user_img">';
    else if(picture_id == 4)
        display_user_picture.innerHTML = '<img src="../Statics/Media/img/estrellita_style_4.jpeg" id="user_img">';

    setCookie("pfp_id", picture_id, 7);
}
function ConfigUsername(username)
{
    if(username == '')
        username = "Invitado";

    display_username.innerHTML = username;
}
/*=======================================DOM==============================*/
document.addEventListener("DOMContentLoaded", ()=>
{
    //Se configura al usuario al cargar la página
    configUserPicture(getCookie("pfp_id"));
    ConfigUsername(getUsername());

    /*=================================Modify Profile Picture============*/
    button_mod_picture.addEventListener("click", ()=>
    {
        let current_pfp_id = getCookie('pfp_id');
        
        //Si pfp esta vacio o es igual a cuatro iguala a la imagen por defecto
        if(current_pfp_id == '' || current_pfp_id == 4)
            current_pfp_id = 0;
        else
            current_pfp_id++;
        
        configUserPicture(current_pfp_id);
    });
    /*=================================Modify Username============*/
    button_mod_username.addEventListener("click", ()=>
    {
        //Accedemos al InputText para obtener el nuevo nombre
        let new_username_input = document.getElementById('changeNameInput');
        
        //Mostramos y ocultamos la entrada del nuevo nombre
        if (new_username_input.style.display == "block")
            new_username_input.style.display = "none";
        else
            new_username_input.style.display = "block";

        new_username_input.addEventListener("change", ()=>
        {
            //Si la cadena no esta vacia modificamos el username
            if(new_username_input.value != '')
            {
                setCookie("username", new_username_input.value, 7);
                display_username.innerHTML = new_username_input.value;
            }
        });
    });
});