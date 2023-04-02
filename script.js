"use strict";

//vmaos a capturar todos los elementos del dom para las opciones de piedra, papel y tijera
let botonPiedra= document.querySelector(".piedra");
let botonPapel= document.querySelector(".papel");
let botonTijera= document.querySelector(".tijera");

//capturamos los elementos DOM
let manoUsuario=document.querySelector(".mano-usuario");
let manoComputador=document.querySelector(".mano-computador");

let puntajeUsuario=document.querySelector(".puntaje-usuario p");
let puntajeComputador=document.querySelector(".puntaje-computador p");

let Resultado= document.querySelector(".resultado")

let Tablero= document.querySelector(".tablero")

let eleccionUsuario= ""
let eleccionComputador=""

let contadorUsuario = 0;
let contadorComputador = 0;

/***
 * Alerta
 */
const swalInicio = () => {
  Swal.fire({
    icon: 'success',
    title: '¿Juguemos?',
    text: 'Gana el primero que llegue a 3 puntos',
    allowOutsideClick: false
  })
}
swalInicio();

const swalGanador = () => {
  Swal.fire({
    icon: 'success',
    title: 'Ganaste!',
    text:'Continuemos...',
    allowOutsideClick: false
  })
}

const swalPerdedor = () => {
  Swal.fire({       
    icon: 'error',
    title: 'Perdiste!',
    text:'Continuemos...',
    allowOutsideClick: false
  })
}

const limpiarMarcador = () =>{
  contadorUsuario = 0
  contadorComputador = 0
  puntajeUsuario.textContent = contadorUsuario
  puntajeComputador.textContent = contadorComputador
  manoUsuario.src = "./assets/piedra_ada.png"
  manoComputador.src = "./assets/piedra_computadora.png"
  Resultado.textContent = "Seleccione una opcion"
}

const ganadores = (puntajeUsuario, puntajeComputador) => {
  console.log("Jugador: " + puntajeUsuario.textContent, "Computador: " + puntajeComputador.textContent) /*Muestra como va el puntaje*/
  if ((puntajeUsuario.textContent >= 3) && (puntajeUsuario.textContent > puntajeComputador.textContent)){
    console.log("Gano el usuario")
    swalGanador()
    limpiarMarcador()
  }else if ((puntajeComputador.textContent >= 3) && (puntajeComputador.textContent > puntajeUsuario.textContent)){
    console.log("Gano el computador")
    swalPerdedor()
    limpiarMarcador()
  }
}

const resultado = () => {
  if (eleccionUsuario == "piedra"){
    if (eleccionComputador == "piedra"){
      Resultado.textContent = "Empate!!"
    }
    if (eleccionComputador == "papel"){
      Resultado.textContent = "Perdiste!!"
      contadorComputador++
      puntajeComputador.textContent = contadorComputador
      ganadores(puntajeUsuario, puntajeComputador)
    }
    if (eleccionComputador == "tijera"){
      Resultado.textContent = "Ganaste!!"
      contadorUsuario++
      puntajeUsuario.textContent = contadorUsuario
      ganadores(puntajeUsuario, puntajeComputador)
    }
  }

  if (eleccionUsuario == "papel"){
    if (eleccionComputador == "piedra"){
      Resultado.textContent = "Ganaste!!"
      contadorUsuario++
      puntajeUsuario.textContent = contadorUsuario
      ganadores(puntajeUsuario, puntajeComputador)
    }
    if (eleccionComputador == "papel"){
      Resultado.textContent = "Empate!!"
    }
    if (eleccionComputador == "tijera"){
      Resultado.textContent = "Perdiste!!"
      contadorComputador++
      puntajeComputador.textContent = contadorComputador
      ganadores(puntajeUsuario, puntajeComputador)
    }
  }

  if (eleccionUsuario == "tijera"){
    if (eleccionComputador == "piedra"){
      Resultado.textContent = "Perdiste!!"
      contadorComputador++
      puntajeComputador.textContent = contadorComputador
      ganadores(puntajeUsuario, puntajeComputador)
    }
    if (eleccionComputador == "papel"){
      Resultado.textContent = "Ganaste!!"
      contadorUsuario++
      puntajeUsuario.textContent = contadorUsuario
      ganadores(puntajeUsuario, puntajeComputador)
    }
    if (eleccionComputador == "tijera"){
      Resultado.textContent = "Empate!!"
    }
  }
}

const azarComputadora = () => {
  let opcionAlAzar = Math.floor(Math.random() * 3)

  if (opcionAlAzar == 0){
    eleccionComputador = "piedra"
    manoComputador.src = "./assets/piedra_computadora.png"
  } else if (opcionAlAzar == 1){
    eleccionComputador = "papel"
    manoComputador.src = "./assets/papel_computadora.png"
  } else{
    eleccionComputador = "tijera"
    manoComputador.src = "./assets/tijera_computadora.png"
  }
}

botonPiedra.onclick = () => {
  manoUsuario.src = "./assets/piedra_ada.png"
  manoComputador.src = "./assets/piedra_computadora.png"
  Resultado.textContent = "..."
  Tablero.classList.add("Jugando")
  setTimeout(() => {
    eleccionUsuario = "piedra"
    manoUsuario.src = "./assets/piedra_ada.png"
    azarComputadora()
    Tablero.classList.remove("Jugando")
    resultado()
  }, 2000)
}

botonPapel.onclick = () => {
  manoUsuario.src = "./assets/piedra_ada.png"
  manoComputador.src = "./assets/piedra_computadora.png"
  Resultado.textContent = "..."
  Tablero.classList.add("Jugando")
  setTimeout(() => {
    eleccionUsuario = "papel"
    manoUsuario.src = "./assets/papel_ada.png"
    azarComputadora()
    Tablero.classList.remove("Jugando")
    resultado()
  }, 2000)
}

botonTijera.onclick = () => {
  manoUsuario.src = "./assets/piedra_ada.png"
  manoComputador.src = "./assets/piedra_computadora.png"
  Resultado.textContent = "..."
  Tablero.classList.add("Jugando")
  setTimeout(() => {
    eleccionUsuario = "tijera"
    manoUsuario.src = "./assets/tijera_ada.png"
    azarComputadora()
    Tablero.classList.remove("Jugando")
    resultado()
  }, 2000)
}
