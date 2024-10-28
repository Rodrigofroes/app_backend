import { Request, Response } from 'express';
import UsuarioEntity from '../entities/usuario.entity';
import UsuarioRepository from '../repositories/usuario.repository';

export default class UsuarioController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            let { nome, email, senha } = req.body;
            if (nome && email && senha) {
                let usuarioEntity = UsuarioEntity.create(nome, email, senha);
                let usuarioRepository = new UsuarioRepository();
                let novoUsuario = await usuarioRepository.create(await usuarioEntity);
                if (novoUsuario) {
                    return res.status(201).json({
                        message: 'Usuário criado com sucesso'
                    });
                } else {
                    return res.status(400).json({ message: 'Erro ao criar o usuário' });
                }
            } else {
                return res.status(400).json({ message: 'Os campos nome, email e senha são obrigatórios' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            let usuarioRepository = new UsuarioRepository();
            let usuarios = await usuarioRepository.findAll();
            if (usuarios.length > 0) {
                return res.status(200).json(usuarios);
            } else {
                return res.status(404).json({ message: 'Nenhum usuário encontrado' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async findByUUID(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            if (uuid) {
                let usuarioRepository = new UsuarioRepository();
                let usuario = await usuarioRepository.findByUUID(uuid);
                if (usuario) {
                    return res.status(200).json(usuario);
                } else {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
            } else {
                return res.status(400).json({ message: 'O campo UUID é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid, nome, email, senha } = req.body;
            if (uuid && nome && email && senha) {
                let usuarioEntity = UsuarioEntity.update(uuid, nome, email, senha);
                let usuarioRepository = new UsuarioRepository();
                let usuarioAtualizado = await usuarioRepository.update(await usuarioEntity);
                if (usuarioAtualizado) {
                    return res.status(200).json({
                        message: 'Usuário atualizado com sucesso'
                    });
                } else {
                    return res.status(400).json({ message: 'Erro ao atualizar o usuário' });
                }
            } else {
                return res.status(400).json({ message: 'Os campos UUID, nome, email e senha são obrigatórios' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.body;
            if (uuid) {
                let usuarioRepository = new UsuarioRepository();
                let usuario = await usuarioRepository.findByUUID(uuid);
                console.log(usuario);
                if (usuario) {
                    await usuarioRepository.delete(usuario);
                    return res.status(200).json({
                        message: 'Usuário deletado com sucesso'
                    });
                } else {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
            } else {
                return res.status(400).json({ message: 'O campo UUID é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
}