const colores = ["#ff7675", "#74b9ff", "#55efc4", "#ffeaa7", "#a29bfe", "#fab1a0"];
let i = 0;

function cambiarColor() {
  document.body.style.backgroundColor = colores[i];
  document.getElementById("titulo").innerText = `Color actual: ${colores[i]}`;
  i = (i + 1) % colores.length; // reinicia cuando llega al final
}
