import { Canal } from '../canal/canal.js';
import { Stream } from '../stream/stream.js';

export class Streamer {
  private canales: Canal[];
  private streams: Stream[];

  constructor(
    public nickname: string,
    public descripcion: string,
    public redesSociales: string[]
  ) {
    this.canales = [];
    this.streams = [];
  }

  public agregarCanal(canal: Canal) {
    this.canales.push(canal);
  }

  public agregarStream(stream: Stream) {
    this.streams.push(stream);
  }

  public mostrarCanales(): string {
    let detail: string = "Canales\n";
    this.canales.forEach((canal) => {
      detail += `Banner: ${canal.banner}\n`;
      detail += `Nombre del canal: ${canal.nombre}\n`;
      detail += `Streamer: ${canal.streamer}\n`;
      detail += `Descripción del canal: ${canal.descripcion}\n`;
      detail += '---\n';
    });
    return detail;
  }

  public mostrarStreams() {
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
