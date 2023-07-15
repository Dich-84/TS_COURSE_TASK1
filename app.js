"use strict";
const summerButton = document.querySelector('#summer');
const rainyButton = document.querySelector('#rainy');
const winterButton = document.querySelector('#winter');
const background = document.querySelector('#bgd');
const volumeControl = document.querySelector('#volume-control');
;
const summer = {
    bgrd: 'url(./files/assets/summer-bg.jpg)',
    sound: new Audio('./files/assets/sounds/summer.mp3'),
    isPlaying: false,
};
const rainy = {
    bgrd: 'url(./files/assets/rainy-bg.jpg)',
    sound: new Audio('./files/assets/sounds/rain.mp3'),
    isPlaying: false,
};
const winter = {
    bgrd: 'url(./files/assets/winter-bg.jpg)',
    sound: new Audio('./files/assets/sounds/winter.mp3'),
    isPlaying: false,
};
let currentSound = summer;
function play(obj) {
    if (!obj.isPlaying) {
        currentSound.sound.pause();
        currentSound.isPlaying = false;
        background.style.backgroundImage = obj.bgrd;
        obj.sound.volume = parseInt(volumeControl.value) / 100;
        obj.sound.play();
        obj.isPlaying = true;
        currentSound = obj;
    }
    else {
        obj.sound.pause();
        obj.isPlaying = false;
    }
    volumeControl.addEventListener("change", function () {
        obj.sound.volume = parseInt(volumeControl.value) / 100;
    });
}
summerButton.addEventListener('click', () => play(summer));
rainyButton.addEventListener('click', () => play(rainy));
winterButton.addEventListener('click', () => play(winter));
