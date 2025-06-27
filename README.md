# ENP6-CW25-E4

# Lapse

## Página como reproductor de música.

### Propósito del Proyecto:
*¡¡Hola!! Somos el equipo de desarrolladores web Es3-llitas. Y te vamos a contar un poco de nuestro gran proyecto "Lapse", nuestra página es un reproductor de música web, donde puedes escuchar en tiempo real, las canciones de la gran lista de opciones que ofrecemos.*

Para que tú, querido usuario, vivas una experiencia única, contamos con elementos que te darán una vista especial de tu página, para comenzar, debemos **iniciar sesión** en tu cuenta; necesitarás: un nombre de usuario, un correo y crear una contraseña. Posteriormente, le daremos clic en "Registrarse" y accederemos a la página principal. 

Dentro de la **página principal**, se puede observar una barra de navegación; misma que nos servirá para desplazarnos por las diversas partes de nuestro sitio (playlist, búsqueda y mi usuario), bajo este apartado encontramos las recomendaciones, donde te ofrecemos cinco opciones de canciones que te podrían gustar basado en tus últimas escuchas. 

La parte más importante de la página web, es el **reproductor**, mismo que nos permite saltar y regresar canciones, así como la presencia de múltiples controles para modificar el estado del video actual (pausa/play, volumen y punto de reproducción). Este elemento se conserva en todas las páginas adaptándose al contenido en ellas.

Las pestañas secundarias tienen como una característica destacable la presencia de un hipervínculo dentro del encabezado de cada una de ellas, éste nos permite desplazarnos a la página de inicio, a manera  de que se presente una **navegación** fluida e intuitiva.
 
Para el desarrollo de un **buscador** creamos la vista titulada con el nombre “Lapse Buscador”, en esta encontramos tres botones, los cuales a través de la interacción del usuario realizan la búsqueda a través de los atributos específicos (nombre, álbum y título de la canción). 
Una de estas vistas es la titulada “Lapse- Usuario” dentro de la cual tenemos 2 botones que nos permiten la modificación del nombre de usuario y la imágen de perfil. 

Como vista final tenemos la inservible **playlist** misma que nos permite visualizar todas las canciones que hay en la página, y nos permite agregarlas a una lista de reproducción. La cual cuenta con la función de ser mezclada, así como ser recorrida.

### Instalación, configuración y ejecución.

Para la correcta ejecución del programa lo primero que se debe realizar es la instalación de git, esto a través del enlace (http://git-scm.com/download/win), posteriormente se deberá instalar Phoenix Code del enlace (https://phcode.dev/download), y para terminar las instalaciones se deberá clonar el repositorio del proyecto ubicado en (https://github.com/Erickdced/ENP6-CW25-E3.git).

Una vez concluidas las instalaciones se deberá abrir la carpeta en el phoenix code a manera de que se vean todos los archivos, además en el navegador que vamos a utilizar hay que eliminar la memoria cache para eliminar los problemas con el iFrame y la API.

Durante la ejecución de la página es importante iniciar sesión para el funcionamiento de las imágenes, sin embargo para la exploración del resto de la página no es necesario hacer otra modificación.

### Tecnologías utilizadas para el desarrollo del proyecto.
&nbsp;
* Visual Studio Code:  Editor de código
* Github: Servidor remoto para el repositorio
* Git: Servicio de manejo de versiones. 
* Figma: Diseño base de la página
* Phoenix Code: Entorno de desarrollo   
* Xampp: Herramienta de desarrollo que permite la creación de un servidor local para su uso.
* Gemini IA:  Generación de imágenes para la mascota. 
&nbsp;

### Aportaciones de cada uno de los miembros del equipo.

&nbsp;
1. Cedillo Pérez Erick David (mentor) - Distribución del proyecto de acuerdo a las habilidades individuales del equipo, asesoría en temas donde el equipo presentaba dificultades para la comprensión o aplicación,  apoyo emocional.
Martinez Limón Pedro - Realización del script que permitía la navegación entre páginas, las cookies básica de navegación, además del cambio de foto de perfil y nombres.
2. Munguía Ángel Gabriel - realizó una lista de reproducción 
3. Ollivier Carreño Leileni - Realizó junto con Aurora el diseño con CSS de las vistas buscador y playlist, además de realizar el código para el algoritmo de recomendación. 
4. Vázquez Robles Aurora Betshabé- Realización del diseño CSS de las vistas inicio de sesión, página principal y usuario, además de que ayudó a la administración del proyecto a la hora de definir los puntos clave a desarrollar.
5. Vega Navas Saúl - Realización de cookies para la transmisión de información del reproductor entre ventanas, realización del script que da la funcionalidad al buscador.
&nbsp;


⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠿⠋⠋⠙⠻⣦⣄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠏⠀⠀⠀⠀⠀⠈⢿⣆⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡀⠀⠀⠀⠀⠀⠀⠘⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠀⠀⠀⠀⠀⠈⢿⡑⠤⣀⠀⠀⠀⠀⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣟⠁⢠⣴⣧⡀⠀⠀⠉⠛⠏⠀⠀⠀⠀⠀⣿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣾⡦⠀⠈⢀⣌⠀⠈⠙⠇⢰⣆⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⢀⠀⠈⠋⠃⠀⣀⡀⠸⣿⡆⠀⢀⡀⡀⠀⠀⠀⣾⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣦⠀⣠⡾⠛⠉⠉⠲⣄⠐⠻⠓⠂⢹⣧⠀⣿⡉⢣⡾⣄⢰⡟⢀⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢀⣾⡟⠀⠀⠀⠀⠀⠙⣧⠀⠀⠀⠘⣿⣴⣿⡆⠀⠙⠟⠊⢉⣟⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⢡⡀⠀⠀⠀⠀⠀⣿⠀⠀⢠⡤⠟⠋⠉⠀⠀⠀⠀⢠⣿⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⢈⣿⢲⣶⠄⠀⢀⠀⠀⠙⣷⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⢈⡇⣼⣿⠀⢠⣾⠟⠓⠆⠸⠆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣼⣃⣀⡀⠀⠀⣾⠃⢙⣶⡴⠛⠁⣣⡆⢀⢀⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠶⠦⠿⠛⢒⡾⠳⠤⠤⣈⡁⣲⡧⣴⡾⠋⠀⢠⣀⣙⠁⠈⠿⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠚⠉⠀⠀⠀⠀⣠⡞⠁⠀⠀⠀⠀⣨⣿⣿⡟⠳⡀⠙⣿⣿⡋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⡷⠂⠀⠀⠀⠀⠀⠀⠀⠀⣠⡞⡯⠀⠀⠀⣀⠀⢠⡼⠋⠀⠀⠀⠀⠀⣴⣿⡿⠋⣧⠀⠹⡀⠁⢠⣤⠄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⡀⠀⠀⠀⠀⠀⠀⣴⣦⠀⠀⢾⠆⠀⣠⡾⢋⣼⠈⠙⠫⢩⣃⡴⠋⠀⠀⠀⠀⠀⢠⣾⡿⠋⠀⠀⢸⡇⠀⢳⠀⠀⠉⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⢍⣦⡄⠠⣼⡤⠀⠈⠀⣀⡠⠤⠒⣻⡿⢟⣉⠀⠀⠀⠀⠻⡯⡀⠀⠀⠀⠀⢠⣴⠿⠋⠀⠀⣶⢖⢸⣴⠀⠀⡇⠀⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠛⢉⡦⠐⠋⠀⠀⠀⢰⠏⠀⠀⢀⣿⡄⣰⠗⠂⠘⠀⠑⢤⣠⡴⠟⠁⠀⠀⠀⠀⣿⠉⢙⢇⣀⣠⢷⢿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣦⣧⡄⠀⠀⣀⠔⠊⠁⠀⠀⠀⠀⠀⠀⣎⣀⣴⡾⠛⠁⠙⠁⠀⠀⠀⣀⣤⠞⠉⢦⠀⠀⠀⠀⣠⣶⣿⡂⠀⠀⠛⡂⣠⠟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡦⡄⠀⠀⠀⠀⠉⠙⠀⡤⠊⠀⠀⠀⠀⠀⠀⢀⣠⣴⡾⠗⠋⠁⠀⠀⠀⠀⣀⣤⡶⠛⠉⠀⠀⠀⠀⠱⡀⢀⣠⡝⠋⠀⠀⠀⠀⠀⠈⠙⢧⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡇⠈⢢⣦⡀⢀⢀⡤⢋⣀⠀⠀⠀⠀⣀⣤⠾⠛⠉⠀⠀⣀⣀⣠⣤⣶⣾⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⢱⠊⠉⢉⣹⠿⣦⠀⠀⢠⡄⡤⢀⣑⣄⠀⠀⠀
⠀⠀⠀⠀⢸⣿⡇⠀⠀⠙⠿⠟⠋⠉⣠⡧⠂⢀⡴⢞⣉⣤⠴⠶⠞⢛⠛⠉⣉⣁⣠⠔⢹⡀⠀⠀⢆⡒⠢⣤⣄⣀⣀⣠⣤⣧⠖⠋⠁⠀⠹⡆⢀⡞⣰⠀⠀⠀⠈⠀⠀⠀
⠀⠀⠀⣸⡿⠟⠛⠀⠀⠀⠀⠀⢀⣴⠏⣠⣾⠿⠚⠋⠁⠀⠀⠠⢦⣌⣫⡉⠙⠛⠋⠀⠸⣷⣀⡀⠀⠀⠉⠉⠉⠉⠉⠉⢹⠇⠀⠀⠀⠀⠀⢧⠊⣰⠃⠀⠀⠀⠀⠀⠀⠀
⠀⠲⠯⣀⡀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠞⠋⠀⣀⣠⣤⣤⠄⠀⠀⠀⠙⢷⣻⣄⠀⠀⠀⠀⠈⠉⢙⣲⠆⠀⠀⠀⠀⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⡴⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠉⢏⣳⣶⠀⠀⠀⣀⣄⣀⣹⡶⡒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣙⠕⠀⡀⠀⠀⣴⡞⠋⠁⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⠀⣀⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠠⠛⣿⠀⢀⡼⢋⡤⠛⠐⠂⠹⠭⠤⠶⢶⣀⡤⠤⢤⣀⣈⠬⠗⠒⣾⠻⢶⡐⣿⠛⠀⠀⠀⠀⠀⠀⢀⠔⠁⠀⠀⠀⠀⣠⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡼⣹⣠⣾⣟⣁⠤⠤⠒⠒⠒⠦⠠⣀⠀⠀⠈⠙⠲⢤⣈⠙⠲⢤⣀⠀⠀⠙⡟⠑⠠⠄⠀⠠⠤⠒⠁⠀⠀⣀⣤⠶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣴⣿⣿⠟⠉⠀⠀⠀⠀⠸⣶⠂⠀⠀⠉⠒⢄⠀⠀⠀⠈⠳⣤⣀⠉⢻⢀⢀⣴⡄⠀⠀⠀⠀⠀⣴⢂⠮⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣼⣿⡿⠋⠀⣄⠀⠀⣠⡄⠀⠀⠁⠀⢠⣤⣆⡀⠀⢳⡀⠀⠀⠀⠈⢻⣿⡿⠯⠀⠙⠁⠀⢤⣼⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣸⡿⠋⠀⠀⢹⡿⣟⠀⠘⠉⣠⣗⡆⠀⠐⠛⠇⠀⠀⠀⢷⠀⠀⠀⠀⠀⠉⢿⡄⠀⠀⡷⠄⠈⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣰⠟⠁⡄⠀⠀⣨⡄⠈⠀⠀⠀⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠈⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⠃⠀⢻⡿⡅⠀⠙⠛⠀⠀⠀⠀⢹⣇⡀⠀⠀⠀⠀⠀⠀⢀⠏⠀⠀⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣳⣄⣀⣀⣀⠤⠔⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀