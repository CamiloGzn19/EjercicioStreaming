export class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.canales = [];
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    obtenerCanales() {
        return this.canales;
    }
    buscarCanal(nombreCanal) {
        return this.canales.find((canal) => canal.nombre === nombreCanal);
    }
}
