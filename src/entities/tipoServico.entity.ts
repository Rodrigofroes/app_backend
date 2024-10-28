export type TipoServicoProps = {
    id: string;
    descricao: string;
};

export default class TipoServicoEntity {
    private constructor(private readonly props: TipoServicoProps) { }

    public static create(descricao: string): TipoServicoEntity {
        return new TipoServicoEntity({
            id: crypto.randomUUID().toString(),
            descricao
        });
    }

    public get id(): string {
        return this.props.id;
    }

    public get descricao(): string {
        return this.props.descricao;
    }
}