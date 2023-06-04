import { Stream } from '../stream/stream.js';

export class Streamer {
  public nickname: string;
  public descripcion: string;
  public redesSociales: string[] = [];
  private streams: Stream[] = [];

  constructor(nickname: string, descripcion: string, redesSociales: string[]) {
    this.nickname = nickname;
    this.descripcion = descripcion;
    this.redesSociales = redesSociales;
  }

  public agregarStream(stream: Stream) {
    this.streams.push(stream);
  }

  public obtenerStreams(): Stream[] {
    return this.streams;
  }

  public buscarStream(categoria: string): Stream | undefined {
    return this.streams.find((stream) => stream.categorias.includes(categoria));
  }
}
