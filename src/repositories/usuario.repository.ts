import UsuarioEntity from "../entities/usuario.entity";
import prisma from "../prisma/client";
import { IUsuarioRepository } from "./interfaces/usuario.interface";

export default class UsuarioRepository implements IUsuarioRepository {
    public async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        const usuarioCreated = await prisma.usuario.create({
            data: {
                usu_UUID: usuario.id,
                usu_nome: usuario.nome,
                usu_email: usuario.email,
                usu_senha: usuario.senha
            }
        });

        return await UsuarioEntity.create(usuarioCreated.usu_nome, usuarioCreated.usu_email, usuarioCreated.usu_senha);
    }

    public async findAll(): Promise<UsuarioEntity[]> {
        const usuarios = await prisma.usuario.findMany();

        const usuariosEntities = await Promise.all(
            usuarios.map(async (usuario) => {
                return await UsuarioEntity.create(usuario.usu_nome, usuario.usu_email, usuario.usu_senha);
            })
        );

        return usuariosEntities;
    }

    public async findByUUID(uuid: string): Promise<UsuarioEntity | null> {
        const usuario = await prisma.usuario.findUnique({
            where: {
                usu_UUID: uuid
            }
        });

        if (!usuario) {
            return null;
        }

        return await UsuarioEntity.create(usuario.usu_nome, usuario.usu_email, usuario.usu_senha);
    }

    public async update(usuario: UsuarioEntity): Promise<UsuarioEntity> {
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

        return await UsuarioEntity.create(usuarioUpdated.usu_nome, usuarioUpdated.usu_email, usuarioUpdated.usu_senha);
    }

    public async delete(usuario: UsuarioEntity): Promise<void> {
        let id = "2f657a57-38e1-4c69-957c-07d2f72c3a32";
        await prisma.usuario.delete({
            where: {
                usu_UUID: id
            }
        });
    }
}