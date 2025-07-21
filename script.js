const nombre = document.getElementById("inputname");
let nombre_valido = false;
const nombre_error = document.getElementById("name-error");

const email = document.getElementById("inputmail");
const email_error = document.getElementById("email-error");
let email_valido = false;

const mensaje = document.getElementById("floatingTextarea");

const button = document.getElementById("envio");
const confirmacion = document.getElementById("send-ok");

nombre.addEventListener("keyup", () => {
  let valor = nombre.value.trim();
  if (valor === "") {
    nombre_error.style.display = "block";
    nombre_valido = false;
  }
  if (valor.length < 3 && valor.length != 0) {
    nombre_error.style.display = "block";
    nombre_error.textContent = "nombre con menos de 3 letras invalido";
    nombre_valido = false;
  }
  if (valor.length >= 3) {
    nombre_error.style.display = "none";
    nombre_valido = true;
  }
  if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/.test(valor)) {
    nombre_error.style.display = "block";
    nombre_error.textContent = "nombre invalido";
    nombre_valido = false;
  }

  if (email_valido == true && nombre_valido == true) {
    button.disabled = false;
  }
});

email.addEventListener("keyup", () => {
  let valor_email = email.value.trim();
  if (valor_email.length == 0) {
    email_error.style.display = "block";
    email.textContent = "Ingrese una direccion";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor_email)) {
    email_error.style.display = "block";
  } else {
    email_error.style.display = "none";
    email_valido = true;
  }

  if (email_valido == true && nombre_valido == true) {
    button.disabled = false;
  }
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  confirmacion.style.display = "block";
  setTimeout(() => {
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
  }, 2000);
});
