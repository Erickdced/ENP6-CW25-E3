import databaseJSON from "../JS/database_JSON.js";


console.log(databaseJSON.artistas[0].nombre);
console.log(databaseJSON.artistas[1].nombre);


let search_result_area = document.getElementById('search_result');

let search_input = document.getElementById('search-text');

search_input.addEventListener('input', ()=>
{   
    if(search_input.value === '') 
        search_result_area.innerHTML = '';

    search_result_area.innerHTML += search_input.value + "<br>";
});