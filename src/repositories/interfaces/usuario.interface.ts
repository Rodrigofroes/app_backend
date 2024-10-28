import UsuarioEntity from "../../entities/usuario.entity";

export interface IUsuarioRepository {
    create(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    findAll(): Promise<UsuarioEntity[]>;
    findByUUID(uuid: string): Promise<UsuarioEntity | null>;
    update(usuario: UsuarioEntity): Promise<UsuarioEntity>;
    delete(usuario: UsuarioEntity): Promise<void>;
}