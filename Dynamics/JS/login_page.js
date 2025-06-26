/*==============================================Functionality============================ */

function isAlphaNum(cadena)
{
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    return regex.test(cadena.toString());
}
/*==============================================Login Area============================ */
const login_form = document.getElementById('login_sidebar_form');
    
login_form.addEventListener("submit", function(event){
    event.preventDefault();

    const mail_text = document.getElementById("login_mail_input").value;
    const name_text = document.getElementById("login_name_input").value;
    const pswd_text = document.getElementById("login_pswd_input").value;

    let error_area = document.getElementById('error-area');
    let error_list = Array();

    /*==========================================E-MAIL============================*/
    if ( !isAlphaNum(mail_text.replace("@", "").replace(".", "")))
        error_list.push("El correo solamente acepta caracteres \'@\', \'.\' y alfanuméricos!")
    else
    {
        let mail_content = mail_text.split('@');

        if (mail_content.length != 2)
            error_list.push("El correo debe contar con exactamente un caracter \'@\'!");
        else if (mail_content[0].length == 0)
             error_list.push("El nombre de usuario del correo no puede ser vacío!");
        else if (mail_content[1].length == 0)
            error_list.push("El dominio del correo no puede ser vacío!");                
        else
        {
            let mail_content_domain = mail_content[1].split('.');
            if (mail_content_domain.length < 2)
                error_list.push("Formato de dominio del correo incorrecto!");
        }
    }
    /*========================================USERNAME============================*/
    const name_chars = name_text.replace(".", "").replace("_", "");

    if ( !isAlphaNum(name_chars))
        error_list.push("El nombre de usuario solamente acepta caracteres \'_\', \'.\' y alfanuméricos!");
    else if (name_chars.length == 0)
        error_list.push("El nombre de usuario requiere al menos un caracter alfanumérico!");
    else if (name_text.length > 15)
        error_list.push("El nombre de usuario no puede exceder los 15 caracteres!");
    /*==========================================PASSWORD============================*/
    if ( !isAlphaNum(pswd_text.replace("_", "")) )
            error_list.push("La contraseña tiene que contener caracteres alfanuméricos");
    else if (pswd_text.length > 15 || pswd_text.length < 6)
            error_list.push("La contraseña debe tener entre 5 y 15 caracteres!!");
    /*========================================USERNAME============================*/
    if(error_list.length > 0)
    {
        error_area.innerHTML = "";            
        for (iterador in error_list)
            error_area.innerHTML += error_list[iterador] + "<br>";

        return;
    }

    /*========================================INCORPORATE COOKIES============================*/
    setCookie("username", name_text, 7);
    setCookie("email", mail_text, 7);
    setCookie("password", pswd_text, 7);
    setCookie("pfp_id", 0, 7);
    /*========================================SENDING TO HOME============================*/
    window.location.href = "home_page.html";
});