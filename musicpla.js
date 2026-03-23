    let index=3;
  let palyingSong=false;
  let songName=document.querySelector(".song-name");
  let singerName=document.querySelector(".singer-name");
  let songImage=document.querySelector(".song-image");
  let playpauseimg=document.querySelector("#play-pause");
  let track=document.createElement("audio");
  let volumeC=document.querySelector("#volume-icon");
  let musician=document.querySelector("#musician");
  let volumeRange=document.querySelector("#volume-range");
  let songDuration=document.querySelector("#song-duration");
  let playlistImg=document.querySelector("#bini");
  let playlist=document.querySelector(".playlist");
  let playlistSong=document.querySelectorAll(".playlist-song");
  let songs=[
    {
        name:"Ve kamleya",
        path:"ve kamleya.mp3",
        image:"arjit ji.jpg",
        singer:"Arijit Singh"
    },
    {
        name:"Pehle bhi main",
        path:"phle bhi main.mp3",
        image:"vishalm.jpg",
        singer:"Vishal Mishra" 
    },
    {
        name:"First love ",
        path:"first love.mp3",
        image:"garry.jpg",
        singer:"Garry Sandhu" 
    },
   {
        name:"Khand Lagdi ",
        path:"khand lagdi.mp3",
        image:"jasmine.jpg",
        singer:"Jasmine Sandals" 
    },
  ]
  function loadTrack()
  {
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    singerName.innerHTML=songs[index].singer;
    songImage.style=`background-image:url("${songs[index].image}");`
    volume();
  duration();
  track.loop=true;
  setInterval(()=>{
    songDuration.max=track.duration;
    songDuration.value=track.currentTime;
  },1000);
   track.load();
  }
  loadTrack(index);
  function playPause(){
    if(palyingSong==false){
      playSong();
    }
    else{
      pauseSong();
    }
  }
  function playSong()
  {
    track.play();
    palyingSong=true;
    playpauseimg.src="pause-solid-full.svg";
    musician.style.display="block";
  }
  function pauseSong()
  {
    track.pause()
    playingSong=false;
    playpauseimg.src="play.svg";
    musician.style.display="none";
  }
  function forward()
  {
    if(index<(songs.length-1))
    {
      index++;
      loadTrack(index);
      playSong();
   }
   else{
    index=0;
    loadTrack(index);
    playSong();
   }
  }
  function previous()
  { 
    if(index>0)//if index is grater than zero
    {
      index--;
      loadTrack(index);
      playSong();
   }
   else{
    index=songs.length-1;
    loadTrack(index);
    playSong();
   }
  }
  function volume()
  {
    track.volume=volumeRange.value/100;
    if(volumeRange.value==0)
    {
      volumeC.className="fa-solid fa-volume-xmark";
    }
    else{
      volumeC.className="fa-solid fa-volume-high";
    }
  }
  function duration()
  {
    track.currentTime=songDuration.value;
  }
  playlistImg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active");
    if(playlist.classList.contains("playlist-active"))
    {
      playlistImg.className="fa-solid fa-xmark";
    }
    else{
      playlistImg.className="fas fa-list";
    }
  });
  // document.addEventListener("DOMContentLoaded", () => {
  playlistSong.forEach((song,i)=>{
    song.addEventListener('click',()=>{
      index=i;
      loadTrack(index);
      playSong();
      playlist.classList.remove("playlist-active");
      playlistImg.className="fas fa-list";

    });
  });
