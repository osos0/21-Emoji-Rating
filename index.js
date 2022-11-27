const starsEl = document.querySelectorAll(".fa-star");

// console.log(starsEl);

starsEl.forEach((star) => {
  star.onclick = function () {
    console.log(star);
  };
});
