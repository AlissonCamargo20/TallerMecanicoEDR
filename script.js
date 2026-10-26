/* Cotizador */

const formularioCotizador = document.getElementById("formularioCotizador");
const mensajeCotizador = document.getElementById("mensajeCotizador");

const telefonoTaller = "527731019094";

if (formularioCotizador) {
    const campoFecha = document.getElementById("fecha");

    if (campoFecha) {
        const hoy = new Date();
        const anio = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, "0");
        const dia = String(hoy.getDate()).padStart(2, "0");

        campoFecha.min = anio + "-" + mes + "-" + dia;
    }

    formularioCotizador.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const vehiculo = document.getElementById("vehiculo").value.trim();
        const anioVehiculo = document.getElementById("anio").value;
        const servicio = document.getElementById("servicio").value;
        const descripcion = document.getElementById("descripcion").value.trim();
        const fecha = document.getElementById("fecha").value;

        let mensaje = "Hola, quiero solicitar una cotización en Taller Mecánico EDR.\n\n";

        mensaje += "Nombre: " + nombre + "\n";
        mensaje += "Teléfono: " + telefono + "\n";
        mensaje += "Vehículo: " + vehiculo + "\n";
        mensaje += "Año: " + anioVehiculo + "\n";
        mensaje += "Servicio: " + servicio + "\n";
        mensaje += "Descripción: " + descripcion + "\n";

        if (fecha !== "") {
            mensaje += "Fecha preferida: " + fecha + "\n";
        }
/*Solicicte ayuda de ChatGPT para agregar un mensaje de agradecimiento al final del mensaje de cotización.*/
        mensaje += "\nGracias.";

        const enlaceWhatsApp =
            "https://wa.me/" + telefonoTaller + "?text=" + encodeURIComponent(mensaje);

        window.open(enlaceWhatsApp, "_blank");

        if (mensajeCotizador) {
            mensajeCotizador.textContent =
                "Se preparó tu solicitud. Revisa WhatsApp y envía el mensaje para completar tu cotización.";
        }
    });
}

/* Seguimiento */

const formularioSeguimiento = document.getElementById("formularioSeguimiento");
const resultadoSeguimiento = document.getElementById("resultadoSeguimiento");

const folios = [
    {
        numero: "EDR-001",
        vehiculo: "Mini Cooper",
        estado: "En diagnóstico"
    },
    {
        numero: "EDR-002",
        vehiculo: "Volkswagen Sedán",
        estado: "En reparación"
    },
    {
        numero: "EDR-003",
        vehiculo: "Ford Fiesta",
        estado: "Listo para entregar"
    }
];

if (formularioSeguimiento && resultadoSeguimiento) {
    formularioSeguimiento.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const campoFolio = document.getElementById("folio");
        const folioBuscado = campoFolio.value.trim().toUpperCase();

        let encontrado = false;

        for (let i = 0; i < folios.length; i++) {
            if (folios[i].numero === folioBuscado) {
                resultadoSeguimiento.textContent =
                    "Vehículo: " + folios[i].vehiculo +
                    " | Estado: " + folios[i].estado;

                encontrado = true;
                break;
            }
        }

        if (encontrado === false) {
            resultadoSeguimiento.textContent =
                "No encontramos ese folio. Verifica que esté escrito correctamente.";
        }
    });
}