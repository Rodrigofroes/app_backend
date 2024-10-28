import { UsuarioOutputDTO } from "../../dtos/usuario.output.dto";
import UsuarioEntity from "../../entities/usuario.entity";

export interface IUsuarioRepository {
    create(usuario: UsuarioEntity): Promise<UsuarioOutputDTO>;
    findAll(): Promise<UsuarioOutputDTO[]>;
    findByUUID(uuid: string): Promise<UsuarioOutputDTO | null>;
    update(usuario: UsuarioEntity): Promise<UsuarioOutputDTO>;
    delete(uuid: string): Promise<void>;
}