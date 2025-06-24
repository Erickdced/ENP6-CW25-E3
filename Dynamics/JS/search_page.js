/*===================GENERAL========================*/

import databaseJSON from "../JS/database_JSON.js";

console.log(databaseJSON.artistas[0].nombre);


document.addEventListener('DOMContentLoaded', function(){

    let song_container = document.getElementById("search_song_list");
    song_container.innerHTML = "";

    for(let song in databaseJSON.canciones){
        song_container.innerHTML +=
            '<div class="search_song_name"> \
                <span>'+song.nombre+' - '+song.artista+'</span> \
            </div>'
    }

    let read_text_input = document.getElementById('search-text').addEventListener("input", ()=>
    {
        
    });
});