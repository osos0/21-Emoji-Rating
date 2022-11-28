const starsEl = document.querySelectorAll(".fa-star");
const spaceEl = document.querySelectorAll(".space");

starsEl.forEach((star, index) => {
  star.onclick = () => {
    starsEl.forEach((st) => {
      st.classList.remove("active");
    });
    for (let i = 0; i <= index; i++) {
      starsEl[i].classList.add("active");
    }

    spaceEl.forEach((emo) => {
      emo.style.transform = `translateX(-${index * 50}px)`;
    });
  };
});
