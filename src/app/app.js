import { Plataforma } from "../plataforma/plataforma.js";
import { Canal } from "../canal/canal.js";
import { Streamer } from "../streamer/streamer.js";
import { Stream } from "../stream/stream.js";
export class App {
    constructor() {
        this.plataformas = [];
    }
    mostrarListadoPlataformas() {
        console.log("Listado de Plataformas:");
        this.plataformas.forEach((plataforma) => {
            console.log(`- ${plataforma.nombre}`);
        });
    }
    mostrarDetallePlataforma(nombrePlataforma) {
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            console.log(`Detalle de la Plataforma:\nNombre: ${plataforma.nombre}\nLogo: ${plataforma.logo}\nDescripción: ${plataforma.descripcion}\nEmpresa: ${plataforma.empresa}`);
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}.`);
        }
    }
    mostrarListadoCanales(nombrePlataforma) {
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            console.log(`Listado de Canales de la Plataforma ${nombrePlataforma}:`);
            plataforma.obtenerCanales().forEach((canal) => {
                console.log(`- ${canal.nombre} (${canal.streamer})`);
            });
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}.`);
        }
    }
    mostrarDetalleCanal(nombrePlataforma, nombreCanal) {
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            const canal = plataforma.buscarCanal(nombreCanal);
            if (canal) {
                console.log(`Detalle del Canal:\nNombre: ${canal.nombre}\nBanner: ${canal.banner}\nStreamer: ${canal.streamer}\nDescripción: ${canal.descripcion}`);
            }
            else {
                console.log(`No se encontró el canal ${nombreCanal} en la plataforma ${nombrePlataforma}.`);
            }
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}.`);
        }
    }
    mostrarListadoStreamers() {
        console.log("Listado de Streamers:");
        this.plataformas.forEach((plataforma) => {
            plataforma.obtenerCanales().forEach((canal) => {
                canal.obtenerStreamers().forEach((streamer) => {
                    console.log(`- ${streamer.nickname}`);
                });
            });
        });
    }
    mostrarDetalleStreamer(nickname) {
        const streamer = this.buscarStreamer(nickname);
        if (streamer) {
            console.log(`Detalle del Streamer:\nNickname: ${streamer.nickname}\nDescripción: ${streamer.descripcion}\nRedes Sociales: ${streamer.redesSociales.join(", ")}`);
        }
        else {
            console.log(`No se encontró el streamer ${nickname}.`);
        }
    }
    mostrarListadoStreams() {
        console.log("Listado de Streams:");
        this.plataformas.forEach((plataforma) => {
            plataforma.obtenerCanales().forEach((canal) => {
                canal.obtenerStreamers().forEach((streamer) => {
                    streamer.obtenerStreams().forEach((stream) => {
                        console.log(`- ${stream.titulo} (${streamer.nickname})`);
                    });
                });
            });
        });
    }
    mostrarDetalleStream(nickname, categoria) {
        const streamer = this.buscarStreamer(nickname);
        if (streamer) {
            const stream = streamer.buscarStream(categoria);
            if (stream) {
                console.log(`Detalle del Stream:\nTítulo: ${stream.titulo}\nCategorías: ${stream.categorias.join(", ")}`);
            }
            else {
                console.log(`No se encontró un stream de la categoría ${categoria} para el streamer ${nickname}.`);
            }
        }
        else {
            console.log(`No se encontró el streamer ${nickname}.`);
        }
    }
    agregarPlataforma(nombre, logo, descripcion, empresa) {
        const plataforma = new Plataforma(nombre, logo, descripcion, empresa);
        this.plataformas.push(plataforma);
    }
    agregarCanal(nombrePlataforma, nombre, banner, streamer, descripcion) {
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            const canal = new Canal(nombre, banner, streamer, descripcion);
            plataforma.agregarCanal(canal);
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}. No se pudo agregar el canal.`);
        }
    }
    agregarStreamer(nombrePlataforma, nombreCanal, nickname, descripcion, redesSociales) {
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            const canal = plataforma.buscarCanal(nombreCanal);
            if (canal) {
                const streamer = new Streamer(nickname, descripcion, redesSociales);
                canal.agregarStreamer(streamer);
            }
            else {
                console.log(`No se encontró el canal ${nombreCanal} en la plataforma ${nombrePlataforma}. No se pudo agregar el streamer.`);
            }
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}. No se pudo agregar el streamer.`);
        }
    }
    agregarStream(nickname, categoria, titulo) {
        const stream = new Stream(titulo, [categoria]);
        const streamer = this.buscarStreamer(nickname);
        if (streamer) {
            streamer.agregarStream(stream);
        }
        else {
            console.log(`No se encontró el streamer ${nickname}. No se pudo agregar el stream.`);
        }
    }
    buscarPlataforma(nombrePlataforma) {
        return this.plataformas.find((plataforma) => plataforma.nombre === nombrePlataforma);
    }
    buscarStreamer(nickname) {
        for (const plataforma of this.plataformas) {
            for (const canal of plataforma.obtenerCanales()) {
                for (const streamer of canal.obtenerStreamers()) {
                    if (streamer.nickname === nickname) {
                        return streamer;
                    }
                }
            }
        }
        return undefined;
    }
}
