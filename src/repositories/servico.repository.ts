import { ServicoOutputDTO } from "../dtos/servico.output.dto";
import ServicoEntity from "../entities/servico.entity";
import prisma from "../prisma/client";
import { IServicoRepository } from "./interfaces/servico.interface";

export default class ServicoRepository implements IServicoRepository {
    public async create(servico: ServicoEntity): Promise<ServicoOutputDTO> {
        const createdServico = await prisma.servico.create({
            data: {
                ser_UUID: servico.id,
                ser_descricao: servico.descricao,
                ser_valor: servico.valor,
                ser_data: servico.data,
                ser_usu_id: servico.usuarioId,
                ser_tps_id: servico.tipoServicoID,
            },
        });

        return this.toMap(createdServico);
    }

    public async findAll(): Promise<ServicoOutputDTO[]> {
        const servicos = await prisma.servico.findMany();

        return this.toMapArray(servicos);
    }

    public async findByUUID(uuid: string): Promise<ServicoOutputDTO | null> {
        const servico = await prisma.servico.findUnique({
            where: {
                ser_UUID: uuid,
            },
        });

        if (!servico) return null;

        return this.toMap(servico);
    }

    public async update(servico: ServicoEntity): Promise<ServicoOutputDTO> {
        const updatedServico = await prisma.servico.update({
            where: {
                ser_UUID: servico.id,
            },
            data: {
                ser_descricao: servico.descricao,
                ser_valor: servico.valor,
                ser_data: servico.data,
                ser_usu_id: servico.usuarioId,
                ser_tps_id: servico.tipoServicoID,
            },
        });

        return this.toMap(updatedServico);
    }

    public async delete(uuid: string): Promise<void> {
        await prisma.servico.delete({
            where: {
                ser_UUID: uuid,
            },
        });
    }

    private toMap(servico: any): ServicoOutputDTO {
        return {
            id: servico.ser_id,
            uuid: servico.ser_UUID,
            descricao: servico.ser_descricao,
            valor: servico.ser_valor,
            data: servico.ser_data,
            usuarioId: servico.ser_usu_id,
            tipoServicoID: servico.ser_tps_id,
        };
    }

    // Método para mapear uma lista de usuarios do banco para UsuarioOutputDTO[]
    private toMapArray(servicos: any[]): ServicoOutputDTO[] {
        return servicos.map(servico => this.toMap(servico));
    }
}