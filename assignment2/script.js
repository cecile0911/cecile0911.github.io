const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here
// mute button here
const muteUnmuteButton = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (audio.muted) {
    audio.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    audio.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}
// sound effects here
// first need to get access to the sound effect itself
const popSound = document.querySelector("#pop-sound");

// get access to the buttons with "with-sound"
const popButtons = document.querySelectorAll(".with-sound");

// connect every button with clickevent
popButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popSound.play();
  });
});
// get access to img1 and its audio
let myImg1 = document.querySelector("#img1");
let myImg1Audio = document.querySelector("#img1-audio");
// myImg1.addEventListener("mouseover", () =>{
//     myImg1.classList.add("round");
// });

// myImg1.addEventListener("mouseout", ()=>{
//     myImg1.classList.remove("round");
// });
// it seems more clear to use the scale effect only
// so I removed this part of code

myImg1.addEventListener("click", () => {
  if (myImg1Audio.paused) {
    myImg1Audio.play();
  } else{
    myImg1Audio.pause();        
    // pause when click second time
  }
});

// add sound for img2

let myImg2 = document.querySelector("#img2");
let myImg2Audio = document.querySelector("#img2-audio");
myImg2.addEventListener("click", () => {
  if (myImg2Audio.paused) {
    myImg2Audio.play();
  } else{
    myImg2Audio.pause();
  }
});

// add sound for img3

let myImg3 = document.querySelector("#img3");
let myImg3Audio = document.querySelector("#img3-audio");
myImg3.addEventListener("click", () => {
  if (myImg3Audio.paused) {
    myImg3Audio.play();
  } else{
    myImg3Audio.pause();
  }
});