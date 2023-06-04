import { Plataforma } from "./plataforma/plataforma.js";
import { Canal } from "./canal/canal.js";
import { Streamer } from "./streamer/streamer.js";
import { Stream, Categoria } from "./stream/stream.js";

const plataforma = new Plataforma(
  "Tiwtch",
  "URL_Logo",
  "Twitch es una plataforma estadounidense perteneciente a la empresa Amazon, Inc., que permite realizar transmisiones en vivo.",
  "Twitch Interactive"
);

const canal = new Canal(
  "RubiusOMG",
  "URL_banner",
  "Rubén Doblas",
  "Corazon puro, acciones dedsastrozas"
);

const streamer = new Streamer(  
  "Rubius",
  "Rubén Doblas Gundersen, mejor conocido como el Rubius, es un youtuber, streamer y celebridad de internet hispano-noruego, ​reconocido por sus vídeos de entretenimiento basados en gameplays, sketches, parodias, montajes y videoblogs",
  ["Twitch", "Bumble"]
);

const categoria1 = new Categoria(
  "Juegos",
  "Streams en vivo de todos tus juegos favoritos, desde shooters hasta plataformas y mucho más",
  "URL_categoria1"
);

const categoria2 = new Categoria(
  "Nombre de la categoría 2",
  "Descripción de la categoría 2",
  "URL de la imagen 2"
);

const stream = new Stream([categoria1, categoria2]);

plataforma.agregarCanal(canal);
canal.agregarStreamer(streamer);
streamer.agregarCanal(canal);
streamer.agregarStream(stream);

console.log(plataforma.mostrarCanales());
console.log(canal.mostrarStreamers());
console.log(streamer.mostrarCanales());
console.log(streamer.mostrarStreams());
