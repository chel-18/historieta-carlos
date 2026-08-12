/* =====================================
   BOTÓN COMENZAR
===================================== */

const btnComenzar =
    document.getElementById("btnComenzar");

const historia =
    document.getElementById("historia");


btnComenzar.addEventListener("click", function () {

    historia.scrollIntoView({
        behavior: "smooth"
    });

});



/* =====================================
   VOLVER AL INICIO
===================================== */

const btnInicio =
    document.getElementById("btnInicio");


btnInicio.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});