let player;
let duration = 0;
let lastVolume = 100;
let interval;

const names= document.querySelector(".Name");
const artist= document.querySelector(".Artist");
const back= document.getElementById("previo");
const play = document.getElementById("play");
const next = document.getElementById("siguiente");
const volSlider= document.getElementById("volumeSlider");
const mute= document.getElementById("muteBtn");
const seekBar= document.getElementById("seekBar");
const currentTime =document.getElementById("currentTime");
const time= document.getElementById("duration");

let i=0; 
let isPlaying =false; 


function onYouTubeIframeAPIReady()
{
    if (colaRepro.length === 0)
    {
        const playerContainer = document.getElementById("player");
        playerContainer.innerHTML = "<p style='color:white; text-align:center;'>No hay canciones en la cola.<br>Agrega una canción para comenzar.</p>";
        console.warn("Cola vacía: agrega canciones para iniciar el reproductor.");
        return;
    }

    player = new YT.Player("player", 
        {
        videoId: colaRepro[i].link,
        playerVars: 
        {
            controls: 0,
            autoplay: 0
        },
        events: 
        {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady() 
{
    player.setVolume(lastVolume);
    volSlider.value =lastVolume;
    duration =player.getDuration();
    seekBar.max=duration;
    time.textContent =formatTime(duration); 
    songInfo(); 

    interval =setInterval(seekBar_volume, 1000);
}


function seekBar_volume() 
{
    if (player.getPlayerState()===YT.PlayerState.PLAYING) 
    {
        let t =player.getCurrentTime();
        seekBar.value=t;
        currentTime.textContent=formatTime(t);
    }

    let vol= player.getVolume();
    if (vol!==lastVolume) 
    {
        volSlider.value=vol;
        lastVolume=vol;
    }

    mute.textContent = player.isMuted() ? "🔇" : "🔊";
}

function onPlayerStateChange(event) 
{
    if (event.data === YT.PlayerState.PLAYING) 
    {
        isPlaying=true;
        play.src= "../Statics/Media/img/pause.btn.png";
        duration=player.getDuration(); 
        seekBar.max=duration;
        time.textContent =formatTime(duration);
    } 
    else 
    {
        isPlaying=false;
        play.src = "../Statics/Media/img/play.png";
    }
}

function ciclo(index) 
{
    if(colaRepro.length===0)
        return;
    if (index<0) 
    {
        index= colaRepro.length-1;
    }
    if (index>= colaRepro.length) 
    {
        index=0;
    }

    i=index;
    songInfo(); 

    if (isPlaying) 
    { 
        player.playVideo();
    } 
    else 
    {
        duration=player.getDuration();
        seekBar.max=duration;
        time.textContent= formatTime(duration);
    }
}

function songInfo() 
{
    const song=colaRepro[i];
    if(!song)
        return;
    names.textContent=song.nombre;
    artist.textContent= song.artista;
    player.loadVideoById(song.link); 
}

function formatTime(s) 
{
    let m = Math.floor(s/60);
    let sec = Math.floor(s%60);
    return `${m}:${sec<10? "0" :""}${sec}`;
}


function nextBtn() 
{
    ciclo(i+1);
}

function backBtn() 
{
    ciclo(i-1);
}

function playBtn() 
{
    if (player.getPlayerState() === YT.PlayerState.PLAYING) 
    {
        player.pauseVideo();
    } 
    else 
    {
        player.playVideo();
    }
}

function volumeBtn() 
{
    let vol=parseInt(volSlider.value);
    player.setVolume(vol);
    if (vol>0 && player.isMuted()) 
    {
        player.unMute();
    }
    lastVolume=vol; 
}

function muteBtn() 
{
    if (player.isMuted()) 
    {
        player.unMute();
        player.setVolume(lastVolume); 
        volSlider.value = lastVolume;
    } 
    else 
    {
        player.mute();
    }
}

function seekBarBtn() 
{
    let seekTo=parseFloat(seekBar.value); 
    player.seekTo(seekTo,true); 
}

next.addEventListener("click",nextBtn);
back.addEventListener("click",backBtn);
play.addEventListener("click",playBtn);
volSlider.addEventListener("input",volumeBtn);
mute.addEventListener("click",muteBtn);
seekBar.addEventListener("input",seekBarBtn);


document.addEventListener("DOMContentLoaded", songInfo);