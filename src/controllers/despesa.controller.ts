import { Request, Response } from 'express';
import DespesaEntity from '../entities/despesa.entity';
import DespesaRepository from '../repositories/despesa.repository';

export default class DespesaController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            let { descricao, valor, data, usuario, categoria } = req.body;
            if (descricao && valor && data && usuario && categoria) {
                let despesaEntity = DespesaEntity.create(descricao, valor, data, usuario, categoria);
                let despesaRepository = new DespesaRepository();

                let novaDespesa = await despesaRepository.create(despesaEntity);
                if (novaDespesa) {
                    return res.status(201).json({ message: 'Despesa criada com sucesso' });
                } else {
                    return res.status(400).json({ message: 'Erro ao criar a despesa' });
                }
            } else {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            let despesaRepository = new DespesaRepository();
            let despesas = await despesaRepository.findAll();
            if (despesas.length > 0) {
                return res.status(200).json(despesas);
            } else {
                return res.status(404).json({ message: 'Nenhuma despesa encontrada' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async findByUUID(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            if (uuid) {
                let despesaRepository = new DespesaRepository();
                let despesa = await despesaRepository.findByUUID(uuid);
                if (despesa) {
                    return res.status(200).json(despesa);
                } else {
                    return res.status(404).json({ message: 'Despesa não encontrada' });
                }
            } else {
                return res.status(400).json({ message: 'UUID é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid, descricao, valor, data, usuario, categoria } = req.body;
            if (descricao && valor && data && usuario && categoria && uuid) {
                let despesaEntity = DespesaEntity.update(uuid, descricao, valor, data, usuario, categoria);
                let despesaRepository = new DespesaRepository();

                let despesa = await despesaRepository.findByUUID(uuid);
                if (despesa) {
                    let despesaAtualizada = await despesaRepository.update(despesaEntity);
                    if (despesaAtualizada) {
                        return res.status(200).json({ message: 'Despesa atualizada com sucesso' });
                    } else {
                        return res.status(400).json({ message: 'Erro ao atualizar a despesa' });
                    }
                } else {
                    return res.status(404).json({ message: 'Despesa não encontrada' });
                }
            } else {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            if (uuid) {
                let despesaRepository = new DespesaRepository();
                let despesa = await despesaRepository.findByUUID(uuid);
                if (despesa) {
                    await despesaRepository.delete(uuid);
                    return res.status(200).json({ message: 'Despesa deletada com sucesso' });
                } else {
                    return res.status(404).json({ message: 'Despesa não encontrada' });
                }
            } else {
                return res.status(400).json({ message: 'UUID é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
}


