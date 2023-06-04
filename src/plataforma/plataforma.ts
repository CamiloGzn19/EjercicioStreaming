import { Canal } from "../canal/canal.js";

export class Plataforma {
  private canales: Canal[];

  constructor(
    public nombre: string,
    public logo: string,
    public descripcion: string,
    public empresa: string
  ) {
    this.canales = [];
  }

  public agregarCanal(canal: Canal) {
    this.canales.push(canal);
  }

  public mostrarCanales(): string {
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
