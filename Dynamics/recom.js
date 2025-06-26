let historial = [];

// Calcula la moda del género reproducido
const obtenerModaGenero = () => {
    const conteo = {};
    historial.forEach(cancion => {
        const genero = cancion.genero;
        conteo[genero] = (conteo[genero] || 0) + 1;
    });

    let moda = null;
    let max = 0;

    for (let genero in conteo) {
        if (conteo[genero] > max) {
            moda = genero;
            max = conteo[genero];
        }
    }

    return moda;
};

// Muestra recomendaciones dinámicamente
const sugerirCanciones = () => {
    if (historial.length < 1) return;

    const generoModa = obtenerModaGenero();
    const reproducidasIds = historial.map(c => c.id);

    const sugeridas = databaseJSON.canciones.filter(cancion =>
        cancion.genero === generoModa &&
        !reproducidasIds.includes(cancion.id)
    );

    const contenedor = document.querySelector(".home_song_container");
    contenedor.innerHTML = "";

    if (sugeridas.length === 0) {
        contenedor.innerHTML = "<p>No hay nuevas recomendaciones por ahora.</p>";
        return;
    }

    sugeridas.forEach(c => {
        const album = databaseJSON.album.find(a => a.id === c.id_album);
        const urlImg = album?.url_img || "https://via.placeholder.com/100x100";

        const div = document.createElement("div");
        div.classList.add("home_song_square");

        div.innerHTML = `
        <img src="${urlImg}" alt="Portada de ${c.nombre}" 
         style="width:100%; height:auto; cursor:pointer;" 
         onclick="cargarYRecomendar(${databaseJSON.canciones.indexOf(c)})">
        <br>
        <strong>${c.nombre}</strong><br>
        <em>${c.artista}</em>
        `;

        contenedor.appendChild(div);
    });
};

// Esta es la función personalizada para que funcione correctamente desde las recomendaciones
function cargarYRecomendar(index) {
    const cancion = databaseJSON.canciones[index];

    if (!historial.find(c => c.id === cancion.id)) {
        historial.push(cancion);
    }

    loadSong(index); // Esta función ya existe en reproductor.js
    sugerirCanciones();
}

// Mostrar recomendaciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    historial.push(databaseJSON.canciones[0]); // Simula una canción inicial reproducida
    sugerirCanciones();
});
