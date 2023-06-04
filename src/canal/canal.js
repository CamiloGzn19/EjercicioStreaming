export class Canal {
    constructor(nombre, banner, streamer, descripcion) {
        this.streamers = [];
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    agregarStreamer(streamer) {
        this.streamers.push(streamer);
    }
    obtenerStreamers() {
        return this.streamers;
    }
}
