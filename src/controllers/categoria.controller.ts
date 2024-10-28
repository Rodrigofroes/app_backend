import { Request, Response } from 'express';
import CategoriaRepository from '../repositories/categoria.repository';
import CategoriaEntity from '../entities/categoria.entity';

export default class CategoriaController {
    public async listar(req: Request, res: Response): Promise<Response> {
        try {
            let categoria = new CategoriaRepository();
            let categorias = await categoria.findAll();
            if (categorias.length > 0) {
                return res.status(200).json(categorias);
            } else {
                return res.status(404).json({ message: 'Nenhuma categoria encontrada' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async criar(req: Request, res: Response): Promise<Response> {
        try {
            let { nome } = req.body;
            if (nome) {
                let catergoriaEntity = CategoriaEntity.create(nome);
                let categoriaRepository = new CategoriaRepository();
                let novaCategoria = await categoriaRepository.create(catergoriaEntity);
                if (novaCategoria) {
                    return res.status(201).json({
                        message: 'Categoria criada com sucesso'
                    });
                } else {
                    return res.status(400).json({ message: 'Erro ao criar a categoria' });
                }
            } else {
                return res.status(400).json({ message: 'O campo nome é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async atualizar(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid, nome } = req.body;
            if (uuid && nome) {
                let categoriaEntity = CategoriaEntity.update(uuid, nome);
                let categoriaRepository = new CategoriaRepository();
                let categoriaAtualizada = await categoriaRepository.update(categoriaEntity);
                if (categoriaAtualizada) {
                    return res.status(200).json({
                        message: 'Categoria atualizada com sucesso'
                    });
                } else {
                    return res.status(400).json({ message: 'Erro ao atualizar a categoria' });
                }
            } else {
                return res.status(400).json({ message: 'Os campos UUID e nome são obrigatórios' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async deletar(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.body;
            if (uuid) {
                let categoriaEntity = CategoriaEntity.delete(uuid);
                let categoriaRepository = new CategoriaRepository();
                await categoriaRepository.delete(categoriaEntity);
                return res.status(200).json({
                    message: 'Categoria deletada com sucesso'
                });
            } else {
                return res.status(400).json({ message: 'O campo UUID é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
}