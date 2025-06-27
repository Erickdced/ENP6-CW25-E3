
const listCanc=baseDatosJSON
let colaRepro=[];
//obtener cancion por id
function SeleccancionId(idCancion)
{
    //encontrar el primer elemento que tenga el id solicitado
    return listCanc.canciones.find(cancion=>cancion.id===idCancion);
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
document.addEventListener("DOMContentLoaded", function () {
  baseDatosJSON.canciones.forEach(cancion => {
    const artista = baseDatosJSON.artistas.find(a => a.id === cancion.id_artista);
    const album = baseDatosJSON.album.find(a => a.id === cancion.id_album);

    const div = document.createElement("div");
    div.classList.add("playlist_song");

    div.innerHTML = `
      <div class="background_song_image">
        <img class="playlist_song_img" src="${album ? album.url_img : ''}" alt="${cancion.nombre}">
      </div>
      <span>${cancion.nombre}</span>
      <span>${cancion.artista}</span>
      <span>${cancion.album}</span>
      <button class="btn-cancion" data-id="${cancion.id}">🎵</button>
    `;
    const playlistContainer = document.getElementById("playlist_container");
    playlistContainer.appendChild(div);
  });
  document.querySelectorAll(".btn-cancion").forEach(boton => {
    boton.addEventListener("click", () => {
      const idCancion = parseInt(boton.dataset.id, 10);
      alternarCancCola(idCancion);
    });
  });
});

