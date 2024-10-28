import UsuarioEntity from "../entities/usuario.entity";
import prisma from "../prisma/client";
import { IUsuarioRepository } from "./interfaces/usuario.interface";

export default class UsuarioRepository implements IUsuarioRepository {
    public async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
        const usuarioCreated = await prisma.usuario.create({
            data: {
                usu_nome: usuario.nome,
                usu_email: usuario.email,
                usu_senha: usuario.senha
            }
        });

        return UsuarioEntity.create(usuarioCreated.usu_nome, usuarioCreated.usu_email, usuarioCreated.usu_senha);
    }

    public async findAll(): Promise<UsuarioEntity[]> {
        const usuarios = await prisma.usuario.findMany();

        return usuarios.map((usuario) => {
            return UsuarioEntity.create(usuario.usu_nome, usuario.usu_email, usuario.usu_senha);
        });
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

        return UsuarioEntity.create(usuario.usu_nome, usuario.usu_email, usuario.usu_senha);
    }

    public async update(usuario: UsuarioEntity): Promise<UsuarioEntity> {
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

        return UsuarioEntity.create(usuarioUpdated.usu_nome, usuarioUpdated.usu_email, usuarioUpdated.usu_senha);
    }

    public async delete(usuario: UsuarioEntity): Promise<void> {
        await prisma.usuario.delete({
            where: {
                usu_UUID: usuario.id
            }
        });
    }
}