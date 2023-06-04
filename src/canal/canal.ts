import { Streamer } from '../streamer/streamer.js';

export class Canal {
  private streamers: Streamer[];

  constructor(
    public nombre: string,
    public banner: string,
    public streamer: string,
    public descripcion: string
  ) {
    this.streamers = [];
  }

  public agregarStreamer(streamer: Streamer) {
    this.streamers.push(streamer);
  }

  public mostrarStreamers(): string {
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
