const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playSound = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playSound(key.dataset.key));
    mapedKeys.push(key.dataset.key);

});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)){playSound(e.key);};
});

volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.target.value;
});

keysCheckbox.addEventListener("click", () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
});