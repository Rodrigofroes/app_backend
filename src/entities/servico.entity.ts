export type ServicoProps = {
    id: string;
    descricao: string;
    valor: number;
    data: Date;
    usuarioId: number;
    tipoServicoID: number;
};

export default class ServicoEntity {
    private constructor(private readonly props: ServicoProps) { }

    public static create(descricao: string, valor: number, data: Date, usuarioId: number, tipoServicoID: number): ServicoEntity {
        return new ServicoEntity({
            id: crypto.randomUUID().toString(),
            descricao,
            valor,
            data,
            usuarioId,
            tipoServicoID
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

    public get usuarioId(): number {
        return this.props.usuarioId;
    }

    public get tipoServicoID(): number {
        return this.props.tipoServicoID;
    }
}