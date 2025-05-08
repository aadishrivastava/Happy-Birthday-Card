

const audio = document.getElementById('birthdaySong');
const playButton = document.getElementById('playSongButton');
const pauseButton = document.getElementById('pauseSongButton');

window.onload = () => {
    const savedTime = localStorage.getItem('audioCurrentTime');
    if (savedTime) {
        audio.currentTime = savedTime;  
    }

    pauseButton.style.display = 'none';
};

playButton.addEventListener('click', () => {
    audio.play(); 
    audio.muted = false;
    playButton.style.display = 'none'; 
    pauseButton.style.display = 'inline'; 
});


pauseButton.addEventListener('click', () => {
    audio.pause(); 
    playButton.style.display = 'inline'; 
    pauseButton.style.display = 'none';
});

audio.addEventListener('timeupdate', () => {
    localStorage.setItem('audioCurrentTime', audio.currentTime); 
});

window.onbeforeunload = () => {
    audio.pause();
    localStorage.removeItem('audioCurrentTime'); 
};
