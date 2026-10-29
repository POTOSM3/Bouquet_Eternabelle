/* =========================================================
   BOUQUET ETERNABELLE - script.js
   1) Catálogos de graduaciones y difuntos (se arman desde las listas de productos)
   2) Visor para ampliar fotos
   3) Mensaje de WhatsApp con el nombre del arreglo
   ========================================================= */

// Número de WhatsApp con código de país (503 = El Salvador)
const WHATSAPP = "50377745924";

// Carpetas de fotos. Si cambias el nombre de una carpeta, cámbialo solo aquí.
// Ojo: GitHub Pages distingue mayúsculas de minúsculas.
const RUTA_GRADUACION = "img/graduacion/";
const RUTA_DIFUNTOS = "img/difuntos/";

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
    foto: RUTA_GRADUACION + "ramo-osito-girasol.jpg",
    alt: "Ramo negro y dorado con osito graduado, girasol y rosas blancas y negras",
    destacado: true
  },
  {
    nombre: "Hello Kitty graduada",
    detalle: "Caja floral con personaje y detalles rosados.",
    foto: RUTA_GRADUACION + "hello-kitty-graduada.jpg",
    alt: "Caja floral rosada con muñeca graduada, tulipanes y margaritas"
  },
  {
    nombre: "Mini ositos graduados",
    detalle: "Figuras decorativas para ramos y obsequios.",
    foto: RUTA_GRADUACION + "mini-ositos-graduados.jpg",
    alt: "Varios ositos pequeños con birrete de graduación"
  },
  {
    nombre: "Ositos graduados individuales",
    detalle: "Un detalle especial para celebrar.",
    foto: RUTA_GRADUACION + "ositos-individuales.jpg",
    alt: "Dos ositos con birrete y moño, montados en varas"
  },
  {
    nombre: "Ramo de tulipanes rojos",
    detalle: "Arreglo floral con detalle de graduación.",
    foto: RUTA_GRADUACION + "tulipanes-rojos.jpg",
    alt: "Ramo de tulipanes rojos con flores blancas y una figura de graduada"
  },
  {
    nombre: "Rosas satinadas champán",
    detalle: "Ramo elegante en tonos suaves y dorados.",
    foto: RUTA_GRADUACION + "rosas-champan.jpg",
    alt: "Ramo de rosas satinadas color champán con figura de graduada"
  },
  {
    nombre: "Ramo de flores rosadas",
    detalle: "Flores artesanales con birrete.",
    foto: RUTA_GRADUACION + "flores-rosadas.jpg",
    alt: "Ramo de flores rosadas con un birrete negro"
  },
  {
    nombre: "Rosas y osito graduado",
    detalle: "Ramo de rosas satinadas blancas y negras.",
    foto: RUTA_GRADUACION + "rosas-osito-graduado.jpg",
    alt: "Ramo de rosas satinadas blancas y negras con osito graduado y listón"
  }
];

/* ---------------------------------------------------------
   PRODUCTOS DEL DÍA DE LOS DIFUNTOS
   Mismo formato que arriba. "detalle" lleva lo que incluye cada arreglo.
   Las fotos marcadas con REVISAR traen marcas de agua de otras cuentas
   o fotos de personas: conviene cambiarlas por fotos propias.
   --------------------------------------------------------- */
const PRODUCTOS_DIFUNTOS = [
  {
    nombre: "Corona de rosas y girasol",
    detalle: "8 rosas y 1 girasol.",
    foto: RUTA_DIFUNTOS + "corona-rosas-girasol.jpg",
    alt: "Corona con rosas blancas y amarillas y un girasol"
  },
  {
    nombre: "Maceta de rosas con mariposa",
    detalle: "6 rosas premium y 1 mariposa.",
    foto: RUTA_DIFUNTOS + "maceta-rosas-mariposa.jpg",
    alt: "Maceta con rosas rojas, listón rojo y una mariposa"
  },
  {
    nombre: "Maceta de girasoles",
    detalle: "3 girasoles premium.",
    foto: RUTA_DIFUNTOS + "maceta-girasoles.jpg",
    alt: "Maceta con tres girasoles y un lazo amarillo"
  },
  {
    nombre: "Corona blanca con mariposas",
    detalle: "8 rosas y 4 mariposas.",
    foto: RUTA_DIFUNTOS + "corona-blanca-mariposas.jpg", // REVISAR: tiene una marca de agua pequeña
    alt: "Corona blanca con rosas color crema, moño y mariposas"
  },
  {
    nombre: "Corona de rosas con foto",
    detalle: "10 rosas, 1 mariposa y la foto de tu familiar.",
    foto: RUTA_DIFUNTOS + "corona-rosas-con-foto.jpg", // REVISAR: marca de agua y foto de una persona
    alt: "Corona de rosas rosadas con una foto en el centro y una mariposa dorada"
  },
  {
    nombre: "Angelito en maceta",
    detalle: "Alas de ángel, impresión en papel fotográfico, 4 rosas y macetita.",
    foto: RUTA_DIFUNTOS + "angelito-en-maceta.jpg",
    alt: "Angelito con alas blancas sobre una macetita con rosas"
  },
  {
    nombre: "Angelito",
    detalle: "Alas de ángel, impresión en papel fotográfico y 2 rosas.",
    foto: RUTA_DIFUNTOS + "angelito-alas.jpg", // REVISAR: logo de otra cuenta y foto de un bebé
    alt: "Alas de ángel blancas con una impresión de un bebé y dos rosas"
  },
  {
    nombre: "Ángel con limpiapipas",
    detalle: "Alas de ángel con limpiapipas e impresión en papel fotográfico.",
    foto: RUTA_DIFUNTOS + "angel-limpiapipas.jpg",
    alt: "Alas de ángel blancas hechas con limpiapipas y una pequeña figura de ángel"
  },
  {
    nombre: "Corona morada y blanca",
    detalle: "8 rosas y 1 mariposa.",
    foto: RUTA_DIFUNTOS + "corona-morada-blanca.jpg",
    alt: "Corona de rosas moradas y blancas"
  },
  {
    nombre: "Cruz de rosas",
    detalle: "12 rosas y 1 mariposa.",
    foto: RUTA_DIFUNTOS + "cruz-rosas-mariposa.jpg",
    alt: "Cruz de rosas durazno y rojas con una mariposa dorada"
  },
  {
    nombre: "Cruz con follaje",
    detalle: "12 rosas, follaje, 1 mariposa y 1 chonga.",
    foto: RUTA_DIFUNTOS + "cruz-con-follaje.jpg",
    alt: "Cruz de rosas rojas con follaje, una rosa blanca, mariposa y chonga"
  }
];

/* ---------------------------------------------------------
   Utilidades
   --------------------------------------------------------- */
function enlaceWhatsApp(mensaje) {
  const base = "https://wa.me/" + WHATSAPP;
  return mensaje ? base + "?text=" + encodeURIComponent(mensaje) : base;
}

function crearEtiqueta(producto, ocasion) {
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
    "Hola, me interesa el arreglo \"" + producto.nombre + "\" (" + ocasion + "). ¿Me pueden dar el precio y los colores disponibles?"
  );

  texto.append(titulo, detalle, pedir);
  art.append(botonFoto, texto);
  return art;
}

function pintarCatalogo(idContenedor, lista, ocasion) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;
  const fragmento = document.createDocumentFragment();
  lista.forEach(function (producto) {
    fragmento.appendChild(crearEtiqueta(producto, ocasion));
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
   4) Movimiento en celulares
   Sin mouse no existe el "pasar por encima", así que cada etiqueta
   se balancea una sola vez cuando aparece en pantalla.
   --------------------------------------------------------- */
function activarBalanceoTactil() {
  const sinMouse = window.matchMedia("(hover: none)").matches;
  const sinReduccion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!sinMouse || !sinReduccion || !("IntersectionObserver" in window)) return;

  const vigilante = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("balancea");
        vigilante.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".etiqueta").forEach(function (etiqueta) {
    vigilante.observe(etiqueta);
  });
}

/* ---------------------------------------------------------
   Inicio
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  pintarCatalogo("catalogo-graduaciones", PRODUCTOS, "graduación");
  pintarCatalogo("catalogo-difuntos", PRODUCTOS_DIFUNTOS, "Día de los Difuntos");
  activarVisor();
  activarBalanceoTactil();
  activarWhatsApp();

  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
});
