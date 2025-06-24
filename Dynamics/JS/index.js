
document.addEventListener('DOMContentLoaded', function()
{
    const main_form = document.getElementById('login_sidebar_form');
    
    main_form.addEventListener("submit", function(event){
        event.preventDefault();
        
        const mail_text = document.getElementById("login_mail_input").value;
        const name_text = document.getElementById("login_name_input").value;
        const pswd_text = document.getElementById("login_pswd_input").value;
        
        /* Si hay errores se almacenan en error list al final se mencionan en error area */
        let error_area = document.getElementById('error-area');
        let error_list = Array();
        
        /*==========================================E-MAIL============================*/
        if ( !isAlphaNum(mail_text.replace("@", "").replace(".", "")))
            error_list.push("El correo solamente acepta caracteres \'@\', \'.\' y alfanuméricos!")
        else
        {
            mail_content = mail_text.split('@');
            if (mail_content.length != 2)
                error_list.push("El correo debe contar con exactamente un caracter \'@\'!");
            else if (mail_content[0].length == 0)
                error_list.push("El nombre de usuario del correo no puede ser vacío!");
            else if (mail_content[1].length == 0)
                error_list.push("El dominio del correo no puede ser vacío!");                
            else
            {
                mail_content_domain = mail_content[1].split('.');
                if (mail_content_domain.length < 2)
                    error_list.push("Formato de dominio del correo incorrecto!");
            }
        }
                     
        /*========================================USER NAME============================*/
        const name_chars = name_text.replace(".", "").replace("_", "")
        if ( !isAlphaNum(name_chars))
            error_list.push("El nombre de usuario solamente acepta caracteres \'_\', \'.\' y alfanuméricos!")
        else if (name_chars.length == 0)
            error_list.push("El nombre de usuario requiere al menos un caracter alfanumérico!")
        else if (name_text.length > 15)
            error_list.push("El nombre de usuario no puede exceder los 15 caracteres!")

        /*==========================================PASSWORD============================*/
        if ( !isAlphaNum(pswd_text.replace("_", "")) )
            error_list.push("La contraseña tiene que contener caracteres alfanuméricos");
        else if (pswd_text.length > 15 || pswd_text.length < 6)
            error_list.push("La contraseña debe tener entre 5 y 15 caracteres!!");
        
                       
        /* En caso de que la longitud de [error_list] sea mayor a 0, 
        despliega todos los errores contenidos en [error_list] dentro de [error_area] */
        if(error_list.length > 0)
        {
            error_area.innerHTML = "";
            
            for (iterador in error_list)
                error_area.innerHTML += error_list[iterador] + "<br>";
            


            return;
        }

        /***IMPORTANTE: VOLVER A INTEGRAR AL FINALIZAR LOS TEST */
        console.log("no error in form!");
        sessionStorage.setItem("user_mail", mail_text);
        sessionStorage.setItem("user_name", name_text);
        sessionStorage.setItem("user_pswd", pswd_text);
        window.location.href = "home_page.html";
    });
})

function isAlphaNum(cadena)
{
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    return regex.test(cadena.toString());
}
function MarkRed(input_area)
{
    input_area.style.borderColor = "red";
}
function UnmarkRed(input_area)
{
    input_area.style.borderColor = "red";
}
/*
Página 1:

sessionStorage.setItem("usuario", "saul");
sessionStorage.setItem("edad", 25);
window.location.href = "pagina2.html";

Página 2:

let usuario = sessionStorage.getItem("usuario");
let edad = sessionStorage.getItem("edad");

console.log(usuario); // "saul"
console.log(edad);    // "25"
*/