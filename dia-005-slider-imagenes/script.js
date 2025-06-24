const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function mostrarSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

function siguienteSlide() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

function anteriorSlide() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

next.addEventListener("click", siguienteSlide);
prev.addEventListener("click", anteriorSlide);

// Cambio automático cada 3 segundos
setInterval(siguienteSlide, 3000);
