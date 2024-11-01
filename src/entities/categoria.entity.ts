export type CategoriaProps = {
    id: string;
    nome: string;
};


export default class CategoriaEntity {

    private constructor(private readonly props: CategoriaProps) { }

    public static create(nome: string): CategoriaEntity {
        return new CategoriaEntity({
            id: crypto.randomUUID().toString(),
            nome
        });
    }

    public static update(id: string, nome: string): CategoriaEntity {
        return new CategoriaEntity({
            id,
            nome
        });
    }

    public static delete(id: string): CategoriaEntity {
        return new CategoriaEntity({
            id,
            nome: ''
        });
    }

    public get id(): string {
        return this.props.id;
    }

    public get nome(): string {
        return this.props.nome;
    }

    public toJSON() {
        return {
            id: this.props.id,
            nome: this.props.nome
        };
    }
}