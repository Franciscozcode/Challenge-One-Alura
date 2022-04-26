let btnEncriptar = document.querySelector(".encriptar");

let invalidChar = /[^\w\s]/g;

btnEncriptar.addEventListener("click", function () {
  let textoIngresado = document.querySelector(".inputIngresar").value;

  let prueba = textoIngresado.match(invalidChar);
  if (prueba !== null) {
    alert("Caracter inválido");
  }

  let encriptacion = textoIngresado
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.getElementById("resultado").value = encriptacion;
});
 
let btnDesencriptar = document.getElementById("btnDesencriptar")

btnDesencriptar.addEventListener("click", () => {
    let textoEncriptado = document.getElementById("resultado").value;
    let desencriptar = textoEncriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("resultado").value = desencriptar;
  })
