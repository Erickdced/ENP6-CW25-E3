let player;
let duration = 0;
let lastVolume = 100;
let interval;

const name= document.querySelector(".Name");
const artist = document.querySelector(".Artist");
const back = document.getElementById("previo");
const play = document.getElementById("play");
const next = document.getElementById("siguiente");
const volSlider = document.getElementById("volumeSlider");
const mute = document.getElementById("muteBtn");
const seekBar = document.getElementById("seekBar");
const currentTime = document.getElementById("currentTime");
const time = document.getElementById("duration");

let i=0;
let isPlaying= false;

function onYouTubeIframeAPIReady ()
{
    player= new YT.Player("player",
    {
        videoId: databaseJSON.canciones[i].link,
        playerVars: 
        {
            controls:0,
            autoplay:1,
            mute:1
        },
        events:
        {
            onReady: ()=> ready(),
            onStateChange: e => changeState(e)
        }
    
    });
}

const ready =()=>
{
    player.setVolume(lastVolume);
    volSlider.value=lastVolume;
    duration= player.getDuration();
    seekBar.max=duration;
    updateInfo();

    interval= setInterval(()=>{
        if (player.getPlayerState() === YT.PlayerState.PLAYING)
        {
            let t= player.getCurrentTime();
            seekBar.value=t;
            currentTime.textContent=formatTime(t);
        }

        let vol= player.getVolume();
        if (vol !== lastVolume)
        {
            volSlider.value=vol;
            lastVolume=vol;
        }

        mute.textContent=player.isMuted() ?  "🔇" : "🔊";

    },1000);
}

const changeState = e =>
{
    if (e.data === YT.PlayerState.PLAYING)
    {
        isPlaying=true;
        play.src= "../Statics/Media/img/pause.btn.png";
        duration = player.getDuration();
        seekBar.max=duration;
        time.textContent= formatTime(duration);
    }
    else
    {
        isPlaying=false;
        play.src="../Statics/Media/img/play.png";
    }
};

const loadSong = index =>
{
    if (index<0)
    {
        index=databaseJSON.canciones.length -1;
    }
    if (index>=databaseJSON.canciones.length)
    {
        index=0;
    }

    i=index;
    updateInfo();

    if (isPlaying)
    {
        player.playVideo();
    }
};

const updateInfo =()=>
{
    const song =databaseJSON.canciones[i];
    name.textContent= song.nombre;
    artist.textContent= song.artista;
    player.loadVideoById(song.link);
};

const formatTime= s=>
{
    let m= Math.floor(s/60);
    let sec = Math.floor(s%60);
    return `${m}:${sec < 10 ? "0" : ""}${sec}`;

};

next.addEventListener("click", ()=> loadSong(i+1));
back.addEventListener("click", ()=> loadSong(i-1));

play.addEventListener("click", ()=>{
    if (player.getPlayerState()=== YT.PlayerState.PLAYING)
    {
        player.pauseVideo();
    }
    else
    {
        player.playVideo();
    }
});

volSlider.addEventListener("input", ()=>{
    let vol= parseInt(volSlider.value);
    player.setVolume(vol);
    if (vol>0 && player.isMuted())
    {
        player.unMute();
    }
    lastVolume=vol;
});

mute.addEventListener("click", ()=>{
    if (player.isMuted())
    {
        player.unMute();
        player.setVolume(lastVolume);
        volSlider.value=lastVolume;
    }
    else
    {
        player.mute();
    }
});

seekBar.addEventListener("input", ()=> {
    let seekTo= seekBar.value;
    player.seekTo(seekTo,true);

});

document.addEventListener("DOMContentLoaded", () => {
    updateInfo();
    sugerirCanciones();
});