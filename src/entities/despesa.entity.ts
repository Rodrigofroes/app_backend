export type DespesaProps = {
    id: string;
    descricao: string;
    valor: number;
    data: Date;
    usuarioId: number;
    categoriaId: number;
};

export default class DespesaEntity {

    private constructor(private readonly props: DespesaProps) { }

    public static create(descricao: string, valor: number, data: Date, usuarioId: number, categoriaId: number): DespesaEntity {
        let dataFormatada = new Date(data);

        return new DespesaEntity({
            id: crypto.randomUUID().toString(),
            descricao,
            valor,
            data: dataFormatada,
            usuarioId,
            categoriaId
        });
    }

    public static update(id: string, descricao: string, valor: number, data: Date, usuarioId: number, categoriaId: number): DespesaEntity {
        let dataFormatada = new Date(data);
        return new DespesaEntity({
            id,
            descricao,
            valor,
            data: dataFormatada,
            usuarioId,
            categoriaId
        });
    }

    public get id(): string {
        return this.props.id;
    }

    public get descricao(): string {
        return this.props.descricao;
    }

    public get valor(): number {
        return this.props.valor;
    }

    public get data(): Date {
        return this.props.data;
    }

    public get usuario(): number {
        return this.props.usuarioId;
    }

    public get categoria(): number {
        return this.props.categoriaId;
    }
}