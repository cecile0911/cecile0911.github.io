const myCards = [
  { id: 1, name: "Queen", src: "queen.png" },
  { id: 2, name: "King", src: "king.png" },
  { id: 3, name: "Jack", src: "jack.png" },
];

const deck = document.querySelector(".deck");
console.log(deck);

let cardContent = "";
for (i = 0; i < myCards.length; i++) {
  cardContent += `<div class="card-container">
      <div class="card" draggable="true">
        <div class="card-face"><img src="cloud.png" alt="Back" /></div>
        <div class="card-face flip">
          <img src="queen.png" alt="Queen" />
        </div>
      </div>
    </div>
    `;
}
