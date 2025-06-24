function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const lista = document.getElementById("listaTareas");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Escribe una tarea válida");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="completarTarea(this)">${texto}</span>
    <button onclick="eliminarTarea(this)">🗑️</button>
  `;

  lista.appendChild(li);
  input.value = "";
}

function completarTarea(elemento) {
  elemento.parentElement.classList.toggle("completada");
}

function eliminarTarea(boton) {
  boton.parentElement.remove();
}
