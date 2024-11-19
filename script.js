const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");


function setActive(i) {
  console.log("Slide ativo:", i);

  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    console.log("Dot clicado, índice:", index);
    setActive(index);
  });
});

