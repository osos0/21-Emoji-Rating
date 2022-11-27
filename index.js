const starsEl = document.querySelectorAll(".fa-star");
const spaceEl = document.querySelectorAll(".space");

// console.log(spaceEl);

starsEl.forEach((star, index) => {
  star.onclick = () => {
    // spaceEl[index].style.transform = `translateX(-${50 * index}px)`;
    starsEl.forEach((st) => {
      // console.log(st);
      st.classList.remove("active");
    });
    for (let i = 0; i <= index; i++) {
      // console.log(index);
      // if(starsEl[i]>index)
      starsEl[i].classList.add("active");
    }
  };
});
