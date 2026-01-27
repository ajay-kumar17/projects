let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playbutton = document.getElementById("ctrIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playpause() {
  if (playbutton.classList.contains("fa-pause")) {
    song.pause();
    playbutton.classList.remove("fa-pause");
    playbutton.classList.add("fa-play");
  } else {
    song.play();
    playbutton.classList.remove("fa-play");
    playbutton.classList.add("fa-pause");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playbutton.classList.add("fa-pause");
  playbutton.classList.remove("fa-play");
};
