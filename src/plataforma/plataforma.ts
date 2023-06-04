import { Canal } from "../canal/canal.js";

export class Plataforma {
  public nombre: string;
  public logo: string;
  public descripcion: string;
  public empresa: string;
  private canales: Canal[] = [];

  constructor(nombre: string, logo: string, descripcion: string, empresa: string) {
    this.nombre = nombre;
    this.logo = logo;
    this.descripcion = descripcion;
    this.empresa = empresa;
  }

  public agregarCanal(canal: Canal) {
    this.canales.push(canal);
  }

  public obtenerCanales(): Canal[] {
    return this.canales;
  }

  public buscarCanal(nombreCanal: string): Canal | undefined {
    return this.canales.find((canal) => canal.nombre === nombreCanal);
  }
}