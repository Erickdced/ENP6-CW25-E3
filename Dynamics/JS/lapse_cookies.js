/*============================ Important Notes ==================
*
* setCookie:  
*   cookie_lifetime -> Se emplea para especificar la vigencia que tendrá la cookie dentro de nuestro navegador.
*   cookie_lifetime -> Importante remarcar que se crea como una instancia para la clase [Date] para así poderlo trabajar
*   directamente como [UTCString] aunque podríamos emplear GMT pero así podemos hacer que "coincida con la fecha de expiración"
*   document.cookie -> Acá usamos [encodeURIComponent] para que el texto sea "válido" para [regular resource identifer].
*  
* getCookie:
*   cookieArray -> Separa en ; todo el conjunto de cookies que tiene el objeto document.cookie
*   for(let cookie of cookieArray) -> bucle que nos ayuda a buscar dentro del cookieArray. 
*   cookie = cookie.trim(); -> Elimina los espacios
*   En caso de que se encuentre el valor de la cookie lo retorna (subtrayendo desde la longitud del nombre de la cookie).
*   En caso de no encontrar la cookie retorna ""  
* 
* deleteCookie:
*   Solamente la expira :D
================================================================*/

/**
 * @param {string} cookie_name 
 * @param {string} cookie_value 
 * @param {number} lifetime (Days)
 */
function setCookie(cookie_name, cookie_value, lifetime)
{
    const cookie_lifetime = new Date(Date.now + lifetime * 864e5).toUTCString(); //864e5 = 86,400,000 ms -> 1 day
    document.cookie = `${encodeURIComponent(cookie_name)}=${encodeURIComponent(cookie_value)}; expires=${cookie_lifetime};`;
} 
/**
 * @param {string} cookieName 
 */
function getCookie(cookieName) {

    const name = encodeURIComponent(cookieName) + "=";
    const cookieArray = decodeURIComponent(document.cookie).split(";");

    for (let cookie of cookieArray) 
    {
        cookie = cookie.trim();
        if (cookie.indexOf(name) === 0)
            return cookie.substring(name.length);
    }
    return "";
}
/**
 * @param {string} name 
 */
function deleteCookie(name) 
{
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}