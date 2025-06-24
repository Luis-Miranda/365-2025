let contador = 0;
const valor = document.getElementById("valor");

function actualizarVista() {
  valor.innerText = contador;
}

function aumentar() {
  contador++;
  actualizarVista();
}

function disminuir() {
  if (contador > 0) {
    contador--;
    actualizarVista();
  }
}

function reiniciar() {
  contador = 0;
  actualizarVista();
}
