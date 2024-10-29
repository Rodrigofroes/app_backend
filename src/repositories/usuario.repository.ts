import { UsuarioOutputDTO } from "../dtos/usuario.output.dto";
import UsuarioEntity from "../entities/usuario.entity";
import prisma from "../prisma/client";
import { IUsuarioRepository } from "./interfaces/usuario.interface";

export default class UsuarioRepository implements IUsuarioRepository {
    public async create(usuario: UsuarioEntity): Promise<UsuarioOutputDTO> {
        const usuarioCreated = await prisma.usuario.create({
            data: {
                usu_UUID: usuario.id,
                usu_nome: usuario.nome,
                usu_email: usuario.email,
                usu_senha: usuario.senha
            }
        });

        if (!usuarioCreated) {
            throw new Error('Erro ao criar o usuário');
        }

        return this.toMap(usuarioCreated);
    }

    public async findAll(): Promise<UsuarioOutputDTO[]> {
        const usuarios = await prisma.usuario.findMany();
        return this.toMapArray(usuarios);
    }

    public async findByUUID(uuid: string): Promise<UsuarioOutputDTO | null> {
        const usuario = await prisma.usuario.findUnique({
            where: {
                usu_UUID: uuid
            }
        });

        if (!usuario) {
            return null;
        }

        return this.toMap(usuario);
    }

    public async update(usuario: UsuarioEntity): Promise<UsuarioOutputDTO> {
        const usuarioExists = await prisma.usuario.findUnique({
            where: {
                usu_UUID: usuario.id
            }
        });

        if (!usuarioExists) {
            throw new Error('Usuário não encontrado');
        }

        const usuarioUpdated = await prisma.usuario.update({
            where: {
                usu_UUID: usuario.id
            },
            data: {
                usu_nome: usuario.nome,
                usu_email: usuario.email,
                usu_senha: usuario.senha
            }
        });

        return this.toMap(usuarioUpdated);
    }

    public async delete(uuid: string): Promise<void> {
        await prisma.usuario.delete({
            where: {
                usu_UUID: uuid
            }
        });

        return;
    }

    // Método para mapear um único usuario do banco para UsuarioOutputDTO
    private toMap(usuario: any): UsuarioOutputDTO {
        return {
            id: usuario.usu_id,
            uuid: usuario.usu_UUID,
            nome: usuario.usu_nome,
            email: usuario.usu_email
        };
    }

    // Método para mapear uma lista de usuarios do banco para UsuarioOutputDTO[]
    private toMapArray(usuarios: any[]): UsuarioOutputDTO[] {
        return usuarios.map(usuario => this.toMap(usuario));
    }
}
