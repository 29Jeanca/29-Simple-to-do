const nombreTarea = document.getElementById("input-titulo");
const prioridad = document.getElementById("select-prioridad");
const formulario = document.getElementById("formulario");
function agregarTareas(event) {
  event.preventDefault();
  const tareaAgregada = nombreTarea.value;
  const prioridadElegida = prioridad.value;
  let prioridadTarea;
  if (prioridadElegida == 1) {
    prioridadTarea = "Low";
  }
  if (prioridadElegida == 2) {
    prioridadTarea = "Medium";
  }
  if (prioridadElegida == 3) {
    console.log(prioridadElegida);
    prioridadTarea = "High";
  }
  const tareas = [
    { nombreTarea: tareaAgregada, prioridadTarea: prioridadTarea },
  ];
  const listaTareas = document.getElementById("lista-tareas");

  const arregloTareas = tareas.map((tarea) => {
    return {
      nombreTarea: tarea.nombreTarea,
      prioridadTarea: prioridadTarea,
    };
  });
  const nuevoli = document.createElement("li");
  arregloTareas.forEach((tarea) => {
    const nuevoContenido = document.createTextNode(
      `${tarea.nombreTarea}-------${tarea.prioridadTarea}`
    );
    nuevoli.appendChild(nuevoContenido);
    listaTareas.appendChild(nuevoli);
  });
}
function tareasAltaPrioridad() {}

formulario.addEventListener("submit", agregarTareas);
