
const playButton = document.getElementById("play-btn");

let isPlaying = false;

playButton.addEventListener("click", function() {

    if (isPlaying === false) {
        playButton.innerHTML = "Ⅱ";
        isPlaying = true;
    } else {
        playButton.innerHTML = "▶";
        isPlaying = false;
    }

});
