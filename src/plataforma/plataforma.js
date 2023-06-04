export class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    mostrarCanales() {
        let detail = "Canales:\n";
        this.canales.forEach((canal) => {
            detail += `Nombre del canal: ${canal.nombre}\n`;
            detail += `Banner: ${canal.banner}\n`;
            detail += `Streamer: ${canal.streamer}\n`;
            detail += `Descripción del canal: ${canal.descripcion}\n`;
        });
        return detail;
    }
}
