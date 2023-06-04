export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
        this.streams = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    mostrarCanales() {
        let detail = "Canales\n";
        this.canales.forEach((canal) => {
            detail += `Banner: ${canal.banner}\n`;
            detail += `Nombre del canal: ${canal.nombre}\n`;
            detail += `Streamer: ${canal.streamer}\n`;
            detail += `Descripción del canal: ${canal.descripcion}\n`;
            detail += '---\n';
        });
        return detail;
    }
    mostrarStreams() {
        this.streams.forEach((stream) => {
            console.log('Categorías:');
            stream.categorias.forEach((categoria) => {
                console.log(`Nombre de la categoría: ${categoria.nombre}`);
                console.log(`Descripción de la categoría: ${categoria.descripcion}`);
                console.log(`Imagen de la categoría: ${categoria.imagen}`);
                console.log('------------------------');
            });
        });
    }
}
