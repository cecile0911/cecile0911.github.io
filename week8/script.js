//-----------------------------------------------------
//first course of action: get access to the video
const myVideo = document.querySelector("#my-video");
console.log(myVideo);
//-----------------------------------------------------

//-----------------------------------------------------
//play pause logic
//1.get access to the right button

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

//2.add addeventlistener for the click on this button

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

//3.write the callback function that needs to play or pause the video

function toggleVideo() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

//----------------------------------------------------

// //-----------------------------------------------------
// //first course of action: get access to the video
// const muteUnmuteButton = document.querySelector("#mute-unmute-button");
// console.log(muteUnmuteButton);

// muteUnmuteButton.addEventListener("click",toggleAudio);
// const playPauseButton = document.querySelector("#play-pause-button");
// console.log(playPauseButton);

// //2.add addeventlistener for the click on this button

// const muteUnmuteImg = document.querySelector("play-pause-img");
// console.log(playPauseImg);

// //3.write the callback function that needs to play or pause the video

// function toggleVideo() {
//   if (myVideo.paused || myVideo.ended) {
//     myVideo.play();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
//   } else {
//     myVideo.pause();
//     playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
//   }
// }

// //----------------------------------------------------
