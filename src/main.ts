import { App } from "./app/app.js";

// Crear una instancia de la aplicación
const app = new App();

// Agregar plataformas
app.agregarPlataforma(
  "Twitch",
  "twitch_logo.png",
  "Plataforma de streaming enfocada en videojuegos",
  "Amazon"
);
app.agregarPlataforma(
  "YouTube Live",
  "youtube_logo.png",
  "Plataforma de streaming con contenido variado",
  "Google"
);

// Agregar canales
app.agregarCanal("Twitch", "Canal1", "banner1.png", "Streamer1", "Canal de videojuegos");
app.agregarCanal("Twitch", "Canal2", "banner2.png", "Streamer2", "Canal de música");
app.agregarCanal("YouTube Live", "Canal3", "banner3.png", "Streamer3", "Canal de entretenimiento");

// Agregar streamers
app.agregarStreamer("Twitch", "Canal1", "Streamer1", "Streamer de videojuegos", ["Twitter"]);
app.agregarStreamer("Twitch", "Canal1", "Streamer2", "Streamer de videojuegos", ["Twitter"]);
app.agregarStreamer("Twitch", "Canal2", "Streamer3", "Streamer de música", ["Instagram"]);
app.agregarStreamer("YouTube Live", "Canal3", "Streamer4", "Streamer de entretenimiento", ["Facebook"]);

// Agregar streams
app.agregarStream("Streamer1", "Videojuegos", "Stream de Fortnite");
app.agregarStream("Streamer1", "Videojuegos", "Stream de Valorant");
app.agregarStream("Streamer2", "Videojuegos", "Stream de Minecraft");
app.agregarStream("Streamer3", "Música", "Stream de concierto en vivo");
app.agregarStream("Streamer4", "Entretenimiento", "Stream de sketches cómicos");

// Mostrar listado de plataformas
app.mostrarListadoPlataformas();

// Mostrar detalle de una plataforma
app.mostrarDetallePlataforma("Twitch");

// Mostrar listado de canales de una plataforma
app.mostrarListadoCanales("Twitch");

// Mostrar detalle de un canal
app.mostrarDetalleCanal("Twitch", "Canal1");

// Mostrar listado de streamers
app.mostrarListadoStreamers();

// Mostrar detalle de un streamer
app.mostrarDetalleStreamer("Streamer1");

// Mostrar listado de streams
app.mostrarListadoStreams();

// Mostrar detalle de un stream
app.mostrarDetalleStream("Streamer1", "Videojuegos");

