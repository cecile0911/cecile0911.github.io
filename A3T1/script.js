const hoverclickButton = document.querySelector("#star");
console.log(hoverclickButton);

const clickSound = document.getElementById("clickSound");

hoverclickButton.addEventListener("click", function () {
  clickSound?.play().catch(() => {}); // play the sound effect
  setTimeout(() => {
    window.location.href = "character.html";
  }, 1500);
//  Control the timing of page navigation 
// to avoid interrupting the sound effect 
// and affecting the user experience.

});
