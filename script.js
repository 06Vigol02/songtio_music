console.log("Welcome to Songtio");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('nehiya.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Nehiya k Phulwa",filePath: "songs/nehiya.mp3", covernote: "covers/nehiya.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/2.mp3", covernote: "covers/2.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/3.mp3", covernote: "covers/3.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/4.mp3", covernote: "covers/4.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/5.mp3", covernote: "covers/5.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/6.mp3", covernote: "covers/6.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/7.mp3", covernote: "covers/7.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/8.mp3", covernote: "covers/8.jpg"},
    {songName: "Nach re Patarki Nagin Jaisan",filePath: "songs/9.mp3", covernote: "covers/9.jpg"},
]


// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
     // Listen to Events
     audioElement.addEventListener('timeupdate', ()=>{
     //Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

