export default class DespesaEntity {

    private id: string;
    private descricao: string;
    private valor: number;
    private data: Date;
    private usuarioId: number;
    private categoriaId: number;

    private constructor(id: string, descricao: string, valor: number, data: Date, usuarioId: number, categoriaId: number) {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.data = data;
        this.usuarioId = usuarioId;
        this.categoriaId = categoriaId;
    }

    public getId(): string {
        return this.id;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getValor(): number {
        return this.valor;
    }

    public getData(): Date {
        return this.data;
    }

    public getUsuarioId(): number {
        return this.usuarioId;
    }

    public getCategoriaId(): number {
        return this.categoriaId;
    }
}