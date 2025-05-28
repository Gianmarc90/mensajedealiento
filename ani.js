function mostrarCarta() {
    const carta = document.getElementById("carta");
    carta.style.display = "block";

    const audio = document.getElementById("musicaFondo");
    audio.play().catch(function(error) {
      console.log("Autoplay bloqueado. El usuario debe interactuar con la página.");
    });
}