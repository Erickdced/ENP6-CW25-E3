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
let isPlaying = false; 


function onYouTubeIframeAPIReady() 
{
    i = getCookie("song_number");
    player=new YT.Player("player", 
    {
        videoId:databaseJSON.canciones[i].link,
        playerVars: 
        {
            controls:0,
            autoplay:1,
            mute:1
        },
        events: 
        {
            onReady:onPlayerReady,
            onStateChange:onPlayerStateChange
        }
    });
}


function onPlayerReady() 
{
    player.setVolume(lastVolume);
    volSlider.value = lastVolume;
    duration = player.getDuration();
    seekBar.max = duration;
    time.textContent = formatTime(duration); 

    interval = setInterval(seekBar_volume, 1000);

    get_player_cookies();
    songInfo();
}


function seekBar_volume() 
{
    if (player.getPlayerState()===YT.PlayerState.PLAYING) 
    {
        let t =player.getCurrentTime();
        seekBar.value=t;
        currentTime.textContent=formatTime(t);
    }

    let vol = player.getVolume();
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
    if (index<0) 
    {
        index= databaseJSON.canciones.length-1;
    }
    if (index>= databaseJSON.canciones.length) 
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
    const song=databaseJSON.canciones[i];
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


function song_search(index) 
{
    i=index; 
    songInfo(); 
    if (!isPlaying) 
    { 
        player.playVideo();
    }
}
next.addEventListener("click",nextBtn);
back.addEventListener("click",backBtn);
play.addEventListener("click",playBtn);
volSlider.addEventListener("input",volumeBtn);
mute.addEventListener("click",muteBtn);
seekBar.addEventListener("input",seekBarBtn);


<<<<<<< HEAD
function set_player_cookies(index) {
    // canción = i
        alert(index);
    setCookie("song_number", index, 100);
    // segundo = seekBar.value
    setCookie("second", seekBar.value, 100);
    // play = isPlaying
    setCookie("isPlaying", player.getPlayerState() === YT.PlayerState.PLAYING, 100);
    // volumen = volSlider.value
    setCookie("volume", volSlider.value, 100);
    // muteado = player.isMuted()
    setCookie("muted", player.isMuted(), 100);
    // Lista de canciones
}

function get_player_cookies() {
    try {
        currentSecond = parseInt(getCookie("second"));
        playPause = getCookie("isPlaying");
        volume = getCookie("volume");

        player.seekTo(currentSecond, true);
        seekBar.value = currentSecond;
        currentTime.textContent = formatTime(currentSecond);

        isPlaying = playPause;

        volSlider.value = volume;
        lastVolume = volume;
        player.setVolume(volume);

        if (getCookie("muted"))
            player.mute();

    }
    catch (error){
        alert("AAAAA");
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    
});
document.addEventListener("DOMContentLoaded", songInfo);
document.addEventListener("DOMContentLoaded", ()=>
{
    const username_link = document.getElementById('username_link');

    if(getUsername() == '')
        username_link.innerText = "Mi usuario";
    else
        username_link.innerText = getUsername();
});