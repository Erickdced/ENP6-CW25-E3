/*===================GENERAL========================*/

import databaseJSON from "../JS/database_JSON.js";

console.log(databaseJSON.artistas[0].nombre);


document.addEventListener('DOMContentLoaded', function(){

    let song_container = document.getElementById("search_song_list");
    song_container.innerHTML = "";

<<<<<<< HEAD
    for(let song in databaseJSON.canciones){
        song_container.innerHTML +=
            '<div class="search_song_name"> \
                <span>'+song.nombre+' - '+song.artista+'</span> \
            </div>'
=======
    for(let song in database){
        song_container.innerHTML += ""
>>>>>>> origin/RamaJS
    }
    
    let read_text_input = document.getElementById('search-text').addEventListener("input", ()=>
    {
        
    });
});/*===================GENERAL========================*/

import databaseJSON from "../JS/database_JSON.js";

document.addEventListener('DOMContentLoaded', function(){
    let database = [];
    fetch("../JS/database_JSON.js")
    .then(response => response.json())
    .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar el archivo");
        return response.json();  // Convertimos a objeto JS
    })
    .then(data => {
        database = data.canciones;
    })
    .catch(error => console.error("Error al cargar JSON:", error));

    let song_container = document.getElementById("search_song_list");
    song_container.innerHTML = "";

    for(let song in database){
        song_container.innerHTML += ""
    }
    
    let search_result = document.getElementById('search_result');

    let read_text_input = document.getElementById('search-text').addEventListener("input", ()=>
    {   
    });
});