import { Streamer } from '../streamer/streamer.js';

export class Canal {
  public nombre: string;
  public banner: string;
  public streamer: string;
  public descripcion: string;
  private streamers: Streamer[] = [];

  constructor(nombre: string, banner: string, streamer: string, descripcion: string) {
    this.nombre = nombre;
    this.banner = banner;
    this.streamer = streamer;
    this.descripcion = descripcion;
  }

  public agregarStreamer(streamer: Streamer) {
    this.streamers.push(streamer);
  }

  public obtenerStreamers(): Streamer[] {
    return this.streamers;
  }
}

