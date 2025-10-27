// get read of the right element
const clickSound = document.getElementById("clickSound");

// play sound function
function playSound() {
    if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.volume = 0.3;
        clickSound.play().catch(e => console.log('play failed'));
    }
}

// select all cards
const cards = document.querySelectorAll(".card");
console.log(cards);

// 
cards.forEach(card => {
    card.addEventListener('click', function() {
        
        playSound();
        // flip card
        this.classList.toggle('flip');
    });
});

