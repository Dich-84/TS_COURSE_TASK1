const summerButton: HTMLElement | null = document.querySelector('#summer');
const rainyButton: HTMLElement | null = document.querySelector('#rainy');
const winterButton: HTMLElement | null = document.querySelector('#winter');

const background: HTMLElement | null = document.querySelector('#bgd');

const volumeControl: HTMLInputElement | null = document.querySelector('#volume-control');

interface weatherSounds {
    bgrd: string, 
    sound: HTMLAudioElement, 
    isPlaying: boolean,
};

const summer: weatherSounds = {
    bgrd: 'url(./files/assets/summer-bg.jpg)',
    sound: new Audio('./files/assets/sounds/summer.mp3'),
    isPlaying: false,
};
const rainy: weatherSounds = {
    bgrd: 'url(./files/assets/rainy-bg.jpg)',
    sound: new Audio('./files/assets/sounds/rain.mp3'),
    isPlaying: false,
};
const winter: weatherSounds = {
    bgrd: 'url(./files/assets/winter-bg.jpg)',
    sound: new Audio('./files/assets/sounds/winter.mp3'),
    isPlaying: false,
};

let currentSound: {sound: HTMLAudioElement, isPlaying: boolean} = summer;

function play (obj: weatherSounds): void {
    if (!obj.isPlaying) {
        currentSound.sound.pause();
        currentSound.isPlaying = false;
        background!.style.backgroundImage = obj.bgrd;
        obj.sound.volume = parseInt(volumeControl!.value) / 100;
        obj.sound.play();
        obj.isPlaying = true;
        currentSound = obj;
    } else {
        obj.sound.pause();
        obj.isPlaying = false;
    }
    volumeControl!.addEventListener("change", function(): void {
        obj.sound.volume = parseInt(volumeControl!.value) / 100;
        }
    )
} 

summerButton!.addEventListener('click', () => play(summer));
rainyButton!.addEventListener('click', () => play(rainy));
winterButton!.addEventListener('click', () => play(winter));
