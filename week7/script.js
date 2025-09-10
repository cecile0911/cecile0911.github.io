// I should also access the audio
//so that I can control with my buttons

const myAudio = document.querySelector("#my-audio");
console.log(myAudio);

const myVideo = document.querySelector("#my-video");
console.log(myVideo);
// I need to access the play button
const playButton = document.querySelector("#play-button");
console.log(playButton);

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

// let us add a click event listener so that whenever
//someone click on the playbutton  we can play the audio

playButton.addEventListener("click", playAudio);

function playAudio() {
  myAudio.play();
}

pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  myAudio.pause();
}
//my logic for creating poping sound effect
//first I need to access the poping sound

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

//I need to access the button and listen to clicks on it to
// so whenever someone clicks, we hear a poping sound
const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);

function popAudio() {
  popSound.play();
}
