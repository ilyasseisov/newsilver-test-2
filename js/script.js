setTimeout(function () {
  const cards = document.querySelectorAll(".cards__single-card");
  cards[0].classList.remove("slide-in-left");
  cards[1].classList.remove("scale-in-center");
  cards[2].classList.remove("slide-in-right");
}, 3000);
