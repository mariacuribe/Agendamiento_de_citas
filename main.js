document.getElementById('botonEnviar').addEventListener("onclick", agendarCita);

function agendarCita() {
  const nombre = document.getElementById('nombre').value;
  const fechaHora = document.getElementById('fecha').value;
  console.log('test llamado funcion adentro');
  if (nombre && fechaHora) {
      const cita = {nombre,fechaHora};
    }
}

console.log('test llamado funcion afuera cambio');

