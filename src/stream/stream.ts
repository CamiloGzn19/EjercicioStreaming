export class Stream {
  constructor(public categorias: Categoria[]) {}
}

export class Categoria {
  constructor(
    public nombre: string,
    public descripcion: string,
    public imagen: string
  ) {}
}
