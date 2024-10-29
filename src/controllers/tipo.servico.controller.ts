import { Request, Response } from 'express';
import TipoServicoEntity from "../entities/tipo.servico.entity";
import TipoServicoRepository from "../repositories/tipo.servico.repository";

export default class TipoServicoController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            let { descricao } = req.body;
            if (descricao) {
                const tipoServicoEntity = TipoServicoEntity.create(descricao);
                const tipoServicoRepository = new TipoServicoRepository();
                const tipoServico = await tipoServicoRepository.create(tipoServicoEntity);
                if (tipoServico) {
                    return res.status(201).json({ message: 'Tipo de serviço criado com sucesso' });
                } else {
                    return res.status(500).json({ message: 'Erro ao criar o tipo de serviço' });
                }
            } else {
                return res.status(400).json({ message: 'Descrição do tipo de serviço é obrigatória' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            let { id, descricao } = req.body;
            if (id && descricao) {
                const tipoServicoEntity = TipoServicoEntity.update(id, descricao);
                const tipoServicoRepository = new TipoServicoRepository();

                const servico = await tipoServicoRepository.findByUUID(id);
                if (servico) {
                    const tipoServico = await tipoServicoRepository.update(tipoServicoEntity);
                    if (tipoServico) {
                        return res.status(200).json({ message: 'Tipo de serviço atualizado com sucesso' });
                    } else {
                        return res.status(500).json({ message: 'Erro ao atualizar o tipo de serviço' });
                    }
                } else {
                    return res.status(404).json({ message: 'Tipo de serviço não encontrado' });
                }
            } else {
                return res.status(400).json({ message: 'ID e descrição do tipo de serviço são obrigatórios' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            const tipoServicoRepository = new TipoServicoRepository();
            const servico = await tipoServicoRepository.findByUUID(uuid);
            if (servico) {
                await tipoServicoRepository.delete(uuid);
                return res.status(200).json({ message: 'Tipo de serviço deletado com sucesso' });
            } else {
                return res.status(404).json({ message: 'Tipo de serviço não encontrado' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const tipoServicoRepository = new TipoServicoRepository();
            const tipoServicos = await tipoServicoRepository.findAll();
            if (tipoServicos.length > 0) {
                return res.status(200).json(tipoServicos);
            } else {
                return res.status(404).json({ message: 'Nenhum tipo de serviço encontrado' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async findByUUID(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            if (uuid) {
                const tipoServicoRepository = new TipoServicoRepository();
                const tipoServico = await tipoServicoRepository.findByUUID(uuid);
                if (tipoServico) {
                    return res.status(200).json(tipoServico);
                } else {
                    return res.status(404).json({ message: 'Tipo de serviço não encontrado' });
                }
            } else {
                return res.status(400).json({ message: 'O campo UUID é obrigatório' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }
} 