const cards = document.querySelectorAll(".card");

// Make the first card always open initially
if (cards.length > 0) {
  cards[0].classList.add("active");
}

function closeAllCards() {
  cards.forEach(card => {
    card.classList.remove("active");
  });
}

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    closeAllCards();
    card.classList.add("active");
  });
});