import bcrypt from 'bcrypt';

export type UsuarioProps = {
    id: string;
    nome: string;
    email: string;
    senha: string;
};

export default class UsuarioEntity {
    private constructor(private readonly props: UsuarioProps) { }

    public static async create(nome: string, email: string, senha: string): Promise<UsuarioEntity> {
        const hashedPassword = await bcrypt.hash(senha, 10);
        return new UsuarioEntity({
            id: crypto.randomUUID().toString(),
            nome,
            email,
            senha: hashedPassword,
        });
    }

    public static async update(id: string, nome: string, email: string, senha: string): Promise<UsuarioEntity> {
        const hashedPassword = await bcrypt.hash(senha, 10);
        return new UsuarioEntity({
            id,
            nome,
            email,
            senha: hashedPassword,
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

    public async validarSenha(senha: string): Promise<boolean> {
        return bcrypt.compare(senha, this.props.senha);
    }

    public toJSON() {
        return {
            id: this.props.id,
            nome: this.props.nome,
            email: this.props.email,
        };
    }
}