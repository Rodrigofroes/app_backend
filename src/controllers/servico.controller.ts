import { Request, Response } from 'express';
import ServicoRepository from '../repositories/servico.repository';
import ServicoEntity from '../entities/servico.entity';

export default class ServicoController {
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            let { descricao, data, valor, usuarioID, tipoID } = req.body;
            if (descricao && data && valor && usuarioID && tipoID) {
                let servicoEntity = ServicoEntity.create(descricao, valor, data, usuarioID, tipoID);
                let servicoRepository = new ServicoRepository();
                let servico = await servicoRepository.create(servicoEntity);
                if (servico) {
                    return res.status(201).json({ message: 'Serviço criado com sucesso!' });
                } else {
                    return res.status(500).json({ message: 'Erro ao criar serviço!' });
                }

            } else {
                return res.status(400).json({ message: 'Dados inválidos!' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid, descricao, data, valor, usuarioID, tipoID } = req.body;
            if (uuid && descricao && data && valor && usuarioID && tipoID) {
                let servicoEntity = ServicoEntity.update(uuid, descricao, valor, data, usuarioID, tipoID);
                let servicoRepository = new ServicoRepository();
                let servico = await servicoRepository.findByUUID(servicoEntity.id);
                if (servico) {
                    let servico = await servicoRepository.update(servicoEntity);
                    if (servico) {
                        return res.status(200).json({ message: 'Serviço atualizado com sucesso!' });
                    } else {
                        return res.status(500).json({ message: 'Erro ao atualizar serviço!' });
                    }
                } else {
                    return res.status(404).json({ message: 'Serviço não encontrado!' });
                }
            } else {
                return res.status(400).json({ message: 'Dados inválidos!' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            let servicoRepository = new ServicoRepository();
            let servico = await servicoRepository.findByUUID(uuid);
            if (servico) {
                await servicoRepository.delete(uuid);
                return res.status(200).json({ message: 'Serviço deletado com sucesso!' });
            } else {
                return res.status(404).json({ message: 'Serviço não encontrado!' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async findAll(req: Request, res: Response): Promise<Response> {
        try {
            let servicoRepository = new ServicoRepository();
            let servicos = await servicoRepository.findAll();
            if (servicos.length > 0) {
                return res.status(200).json(servicos);
            } else {
                return res.status(404).json({ message: 'Não há serviços cadastrados!' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }

    public async findByUUID(req: Request, res: Response): Promise<Response> {
        try {
            let { uuid } = req.params;
            let servicoRepository = new ServicoRepository();
            let servico = await servicoRepository.findByUUID(uuid);
            if (servico) {
                return res.status(200).json(servico);
            } else {
                return res.status(404).json({ message: 'Serviço não encontrado!' });
            }
        } catch (err: any) {
            return res.status(500).json({ message: err.message });
        }
    }
}


