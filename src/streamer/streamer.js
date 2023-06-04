export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.redesSociales = [];
        this.streams = [];
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    obtenerStreams() {
        return this.streams;
    }
    buscarStream(categoria) {
        return this.streams.find((stream) => stream.categorias.includes(categoria));
    }
}
