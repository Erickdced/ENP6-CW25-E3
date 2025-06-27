let search_area = document.getElementById("search-text")
let result_area = document.getElementById("search_result");
let song_button = document.getElementById("search_song_btn");
let artist_button = document.getElementById("search_artist_btn");
let album_button = document.getElementById("search_album_btn");

let song_list = databaseJSON.canciones;
let result_songs;
let sort_type = "nombre";

show_all();

song_button.addEventListener("click", ()=> sort_type = "nombre" );
artist_button.addEventListener("click", ()=> sort_type = "artista" );
album_button.addEventListener("click", ()=> sort_type = "album" );

search_area.addEventListener("input", ()=>{
    result_area.innerHTML = "";
    if (search_area.value === "" || !isAlphaNum( search_area.value.replace(" ", "") ))
    {
        show_all();
    }
    else
    {
        let search_results = [];
        for (let i = 0 ; i < song_list.length ; i++)
        {
            let element = song_list[i];
            let search_value = search_area.value.toLowerCase();
            if (element[sort_type].toLowerCase().indexOf(search_value) != -1 )
            {
                add_song_button(element, i, song_list.length-1);
            }
        }
    }
})

// Muestra todos los botones
function show_all()
{
    for (let j = 0; j < song_list.length ; j++){
        add_song_button(song_list[j], j, song_list.length-1);
    }
}

// Agrega las opciones al área de resultados
function add_song_button(element, value_in_list, line_jump_limit){
    result_area.innerHTML +=
            `<button id="songInBase-`+element.id+`" class="search_result_element" onclick="song_search(${value_in_list})"> \
                <p class = "search_name_artist_font"><i>${element.nombre}</i> - ${element.artista}</p> \
                <p class = "search_album_font">${element.album}<p> \
            </button>`;
        if (value_in_list < line_jump_limit)
            result_area.innerHTML += "<br>";
    result_songs = document.querySelectorAll(".search_result_element");
}

// Reproducir canción no-playlist
result_songs.forEach((result_song) =>
    {
    result_song.addEventListener("click", ()=>
    {
        // Buscar id del elemento en botón
        song_id_in_base = result_song.id.split("-")[1];
        for(let j = 0 ; j < song_list.length ; j++)
        {
            if (song_list[j].id == song_id_in_base)
            {
                originalList = currentSongList
                currentSongList = [song_list[j]];
                i = 0;
                if(originalList.length == 0)
                {
                    onYouTubeIframeAPIReady();
                }
                songInfo();
                break;
            }
        }
    });
});

function isAlphaNum(search_input)
{
    let regex = new RegExp("^[a-zA-Z0-9]+$");
    return regex.test(search_input.toString());
}

const filter_buttons = document.querySelectorAll(".search_filter_button");
filter_buttons.forEach(filter_button => {
    filter_button.addEventListener("click", () => {
        filter_buttons.forEach(b => b.classList.remove("active"));
        filter_button.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", ()=>
{
    const username_link = document.getElementById('nav_username');
    let username = getUsername();

    if(username == '')
        username_link.innerText = "Mi Usuario";
    else
        username_link.innerText = username;
    
});