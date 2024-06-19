// script.js
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('play-pause');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');

    // Set music information
    title.textContent = 'THE PORTFOLIO';
    artist.textContent = 'HI NANNA';

    // Add event listener for play/pause button
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
});

