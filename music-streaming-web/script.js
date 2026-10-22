

// ======== Variable Initialization ========

let songIndex = 0;
let audioElement = new Audio('assets/song.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


// ============ SONGS Playlist ==========

let songs = [
    { songName: "Tere Pyaar Main", filePath: "assets/song.mp3", coverPath: "assets/cover.jpg" },
    { songName: "Beete Lamhe", filePath: "assets/song1.mp3", coverPath: "assets/cover1.jpg" },
    { songName: "Tum ho", filePath: "assets/song2.mp3", coverPath: "assets/cover2.jpg" },
    { songName: "Faasle", filePath: "assets/song3.mp3", coverPath: "assets/cover3.jpg" },
    { songName: "Khat", filePath: "assets/song4.mp3", coverPath: "assets/cover4.jpg" },
    { songName: "Bin Tere", filePath: "assets/song5.mp3", coverPath: "assets/cover5.jpg" },
]


songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// ========= Handle play / pause / click ==========

masterPlay.addEventListener('click', () => {
    // icon of the current song in the list
    let currentRowIcon = document.getElementById(String(songIndex));

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        currentRowIcon.classList.remove('fa-circle-play');
        currentRowIcon.classList.add('fa-circle-pause');

        gif.style.opacity = 1;

    } else {
        audioElement.pause();

        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

        currentRowIcon.classList.remove('fa-circle-pause');
        currentRowIcon.classList.add('fa-circle-play');

        gif.style.opacity = 0;
    }
})

// ========== Event Listeners ==========

audioElement.addEventListener('timeupdate', () => {

    // update seekbar

    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})

// ---- function for play ------

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause")

    })


}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener(('click'), (e) => {
        let clickedIndex = parseInt(e.target.id);

        // 1) Same song is playing -> pause it
        if (clickedIndex === songIndex && !audioElement.paused) {
            audioElement.pause();

            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");

            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');

            gif.style.opacity = 0;
            return;
        }

        // 2) Same song is paused -> resume it from where it stopped
        if (clickedIndex === songIndex && audioElement.paused && audioElement.currentTime > 0) {
            audioElement.play();

            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");

            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');

            gif.style.opacity = 1;
            return;
        }

        // 3) A different song (or first play) -> load and play it
        makeAllPlays();

        songIndex = clickedIndex;
        masterSongName.innerText = songs[songIndex].songName;


        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");

        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


// ====== Previous and Next Button ======

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;

    } else {
        songIndex += 1;
    }

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    // master icon -> pause
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    // list icons -> only the current song shows pause
    makeAllPlays();
    let currentRowIcon = document.getElementById(String(songIndex));
    currentRowIcon.classList.remove('fa-circle-play');
    currentRowIcon.classList.add('fa-circle-pause');
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;

    } else {
        songIndex -= 1;
    }

    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;

    // master icon -> pause
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    // list icons -> only the current song shows pause
    makeAllPlays();
    let currentRowIcon = document.getElementById(String(songIndex));
    currentRowIcon.classList.remove('fa-circle-play');
    currentRowIcon.classList.add('fa-circle-pause');
})