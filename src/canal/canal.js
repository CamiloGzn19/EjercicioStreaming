export class Canal {
    constructor(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
        this.streamers = [];
    }
    agregarStreamer(streamer) {
        this.streamers.push(streamer);
    }
    mostrarStreamers() {
        let detail = "";
        this.streamers.forEach((streamer) => {
            detail += `Nickname del streamer: ${streamer.nickname}\n`;
            detail += `Descripción del streamer: ${streamer.descripcion}\n`;
            detail += `Redes sociales: ${streamer.redesSociales.join(', ')}\n`;
            detail += '---\n';
        });
        return detail;
    }
}
