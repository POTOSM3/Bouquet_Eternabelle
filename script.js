/* =========================================================
   BOUQUET ETERNABELLE - script.js
   1) Catálogo de graduaciones (se arma desde la lista PRODUCTOS)
   2) Visor para ampliar fotos
   3) Mensaje de WhatsApp con el nombre del arreglo
   ========================================================= */

// Número de WhatsApp con código de país (503 = El Salvador)
const WHATSAPP = "50377745924";

/* ---------------------------------------------------------
   1) PRODUCTOS DE GRADUACIÓN
   Para agregar un arreglo nuevo: sube la foto a img/graduacion/
   y copia uno de los bloques de abajo. No hay que tocar el HTML.
   Pon destacado: true en el que quieras mostrar más grande.
   --------------------------------------------------------- */
const PRODUCTOS = [
  {
    nombre: "Ramo de osito y girasol",
    detalle: "Flores artesanales en tonos negro y dorado, con un osito graduado y una tarjeta de felicitación.",
    foto: "img/graduacion/ramo-osito-girasol.jpg",
    alt: "Ramo negro y dorado con osito graduado, girasol y rosas blancas y negras",
    destacado: true
  },
  {
    nombre: "Hello Kitty graduada",
    detalle: "Caja floral con personaje y detalles rosados.",
    foto: "img/graduacion/hello-kitty-graduada.jpg",
    alt: "Caja floral rosada con muñeca graduada, tulipanes y margaritas"
  },
  {
    nombre: "Mini ositos graduados",
    detalle: "Figuras decorativas para ramos y obsequios.",
    foto: "img/graduacion/mini-ositos-graduados.jpg",
    alt: "Varios ositos pequeños con birrete de graduación"
  },
  {
    nombre: "Ositos graduados individuales",
    detalle: "Un detalle especial para celebrar.",
    foto: "img/graduacion/ositos-individuales.jpg",
    alt: "Dos ositos con birrete y moño, montados en varas"
  },
  {
    nombre: "Ramo de tulipanes rojos",
    detalle: "Arreglo floral con detalle de graduación.",
    foto: "img/graduacion/tulipanes-rojos.jpg",
    alt: "Ramo de tulipanes rojos con flores blancas y una figura de graduada"
  },
  {
    nombre: "Rosas satinadas champán",
    detalle: "Ramo elegante en tonos suaves y dorados.",
    foto: "img/graduacion/rosas-champan.jpg",
    alt: "Ramo de rosas satinadas color champán con figura de graduada"
  },
  {
    nombre: "Ramo de flores rosadas",
    detalle: "Flores artesanales con birrete.",
    foto: "img/graduacion/flores-rosadas.jpg",
    alt: "Ramo de flores rosadas con un birrete negro"
  },
  {
    nombre: "Rosas y osito graduado",
    detalle: "Ramo de rosas satinadas blancas y negras.",
    foto: "img/graduacion/rosas-osito-graduado.jpg",
    alt: "Ramo de rosas satinadas blancas y negras con osito graduado y listón"
  }
];

/* ---------------------------------------------------------
   Utilidades
   --------------------------------------------------------- */
function enlaceWhatsApp(mensaje) {
  const base = "https://wa.me/" + WHATSAPP;
  return mensaje ? base + "?text=" + encodeURIComponent(mensaje) : base;
}

function crearEtiqueta(producto) {
  const art = document.createElement("article");
  art.className = "etiqueta" + (producto.destacado ? " etiqueta--destacada" : "");

  const botonFoto = document.createElement("button");
  botonFoto.type = "button";
  botonFoto.className = "etiqueta__foto";
  botonFoto.setAttribute("data-zoom", "");
  botonFoto.setAttribute("aria-label", "Ampliar foto: " + producto.nombre);

  const img = document.createElement("img");
  img.src = producto.foto;
  img.alt = producto.alt;
  img.loading = "lazy";
  botonFoto.appendChild(img);

  const texto = document.createElement("div");
  texto.className = "etiqueta__texto";

  const titulo = document.createElement("h3");
  titulo.textContent = producto.nombre;

  const detalle = document.createElement("p");
  detalle.textContent = producto.detalle;

  const pedir = document.createElement("a");
  pedir.className = "btn btn--chico";
  pedir.textContent = "Pedir por WhatsApp";
  pedir.target = "_blank";
  pedir.rel = "noopener";
  pedir.href = enlaceWhatsApp(
    "Hola, me interesa el arreglo de graduación \"" + producto.nombre + "\". ¿Me pueden dar el precio y los colores disponibles?"
  );

  texto.append(titulo, detalle, pedir);
  art.append(botonFoto, texto);
  return art;
}

function pintarCatalogo() {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return;
  const fragmento = document.createDocumentFragment();
  PRODUCTOS.forEach(function (producto) {
    fragmento.appendChild(crearEtiqueta(producto));
  });
  contenedor.appendChild(fragmento);
}

/* ---------------------------------------------------------
   2) Visor de fotos
   Funciona con cualquier elemento que tenga data-zoom y
   contenga una <img>, incluso los que se crean con JS.
   --------------------------------------------------------- */
function activarVisor() {
  const visor = document.getElementById("visor");
  const imgVisor = document.getElementById("visor-img");
  if (!visor || !imgVisor) return;

  document.addEventListener("click", function (e) {
    const disparador = e.target.closest("[data-zoom]");
    if (disparador) {
      const foto = disparador.querySelector("img");
      if (!foto) return;
      imgVisor.src = foto.currentSrc || foto.src;
      imgVisor.alt = foto.alt;
      visor.showModal();
      return;
    }
    // Clic en el fondo oscuro cierra el visor
    if (e.target === visor) visor.close();
  });
}

/* ---------------------------------------------------------
   3) Enlaces generales de WhatsApp (los que tienen data-wa)
   --------------------------------------------------------- */
function activarWhatsApp() {
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = enlaceWhatsApp("Hola, quiero hacer un pedido en Bouquet Eternabelle.");
  });
}

/* ---------------------------------------------------------
   Inicio
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  pintarCatalogo();
  activarVisor();
  activarWhatsApp();

  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
});
