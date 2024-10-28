export type UsuarioProps = {
    id: string;
    nome: string;
    email: string;
    senha: string;
};

export default class UsuarioEntity {
    private constructor(private readonly props: UsuarioProps) { }

    public static create(nome: string, email: string, senha: string): UsuarioEntity {
        return new UsuarioEntity({
            id: crypto.randomUUID().toString(),
            nome,
            email,
            senha
        });
    }

    public get id(): string {
        return this.props.id;
    }

    public get nome(): string {
        return this.props.nome;
    }

    public get email(): string {
        return this.props.email;
    }

    public get senha(): string {
        return this.props.senha;
    }
}