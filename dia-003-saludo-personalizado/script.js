function saludar() {
  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (nombre === "") {
    mensaje.innerText = "Por favor, escribe tu nombre primero.";
  } else {
    mensaje.innerText = `¡Hola, ${nombre}! Bienvenido al Día 003 del reto 🚀`;
  }
}
