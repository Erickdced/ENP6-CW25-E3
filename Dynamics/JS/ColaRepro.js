
let colaRepro=[];
//obtener cancion por id
function SeleccancionId(idCancion)
{
    //encontrar el primer elemento que tenga el id solicitado
    return databaseJSON.canciones.find(cancion=>cancion.id===idCancion);
}
//checar si una cancion ya pertenece a la cola
function enCola(idCancion)
{
    //checa si algun elemento tiene la id
    return colaRepro.some(cancion => cancion.id === idCancion);
}
//agrega o elimina una cancion en la cola
function alternarCancCola(idCancion) 
{
    if (enCola(idCancion)) {
        colaRepro = colaRepro.filter(cancion => cancion.id !== idCancion);
        console.log(`La canción ${idCancion} ha sido eliminada de la cola`);
    } else {
        const canc = SeleccancionId(idCancion);
        if (canc) {
            colaRepro.push(canc);
            console.log(`Canción ${canc.nombre} ha sido agregada a la cola`);
            i = colaRepro.length - 1;  // Actualizacion del índice para que apunte a la última canción agregada
            songInfo();  // Actualizacion de la información del reproductor
        } else {
            console.warn("Canción no encontrada");
        }
    }
    console.log("Cola actual:", colaRepro);
}

function shuffleValues() {
    const copia = [...colaRepro]; // Clona el arreglo
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    colaRepro = [...copia];
}

shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", ()=>{
  shuffleValues()
});

document.addEventListener("DOMContentLoaded", function () {
  databaseJSON.canciones.forEach(cancion => {
    const artista = databaseJSON.artistas.find(a => a.id === cancion.id_artista);
    const album = databaseJSON.album.find(a => a.id === cancion.id_album);

    const elementContainer = document.createElement("div");
    elementContainer.innerHTML = `
      <div class="playlist_song">
        <div class="background_song_image">
          <img class="playlist_song_img" src="${album ? album.url_img : ''}" alt="${cancion.nombre}">
        </div>
        <span>${cancion.nombre}</span>
        <span>${cancion.artista}</span>
        <span>${cancion.album}</span>
      </div>
      <button class="btn-cancion" data-id="${cancion.id}">🎵</button>
    `;
    const playlistContainer = document.getElementById("playlist_container");
    playlistContainer.appendChild(elementContainer);
  });

  document.querySelectorAll(".btn-cancion").forEach(boton => {
    boton.addEventListener("click", () => {
      const idCancion = parseInt(boton.dataset.id, 10);
      alternarCancCola(idCancion);
    });
  });
});