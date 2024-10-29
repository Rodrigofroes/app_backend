import { TipoServicoOutputDTO } from "../dtos/tipo.servico.output.dto";
import TipoServicoEntity from "../entities/tipo.servico.entity";
import prisma from "../prisma/client";
import { ITipoServicoRepository } from "./interfaces/tipo.servico.interface";

export default class TipoServicoRepository implements ITipoServicoRepository {
    public async create(tipoServico: TipoServicoEntity): Promise<TipoServicoOutputDTO> {
        const createdTipoServico = await prisma.tipo_servico.create({
            data: {
                tps_UUID: tipoServico.id,
                tps_nome: tipoServico.descricao
            }
        });

        return this.toMap(createdTipoServico);
    }

    public async update(tipoServico: TipoServicoEntity): Promise<TipoServicoOutputDTO> {
        const updatedTipoServico = await prisma.tipo_servico.update({
            where: {
                tps_UUID: tipoServico.id
            },
            data: {
                tps_nome: tipoServico.descricao
            }
        });

        return this.toMap(updatedTipoServico);
    }

    public async delete(uuid: string): Promise<void> {
        await prisma.tipo_servico.delete({
            where: {
                tps_UUID: uuid
            }
        });
    }

    public async findAll(): Promise<TipoServicoOutputDTO[]> {
        const tipoServicos = await prisma.tipo_servico.findMany();
        return this.toMapArray(tipoServicos);
    }

    public async findByUUID(uuid: string): Promise<TipoServicoOutputDTO | null> {
        const servico = await prisma.tipo_servico.findUnique({
            where: {
                tps_UUID: uuid
            }
        });

        if (!servico) {
            return null;
        }

        return this.toMap(servico);
    }

    // Método para mapear um único usuario do banco para UsuarioOutputDTO
    private toMap(servico: any): TipoServicoOutputDTO {
        return {
            id: servico.tps_UUID,
            nome: servico.tps_nome,
        };
    }

    // Método para mapear uma lista de usuarios do banco para UsuarioOutputDTO[]
    private toMapArray(servicos: any[]): TipoServicoOutputDTO[] {
        return servicos.map(servico => this.toMap(servico));
    }
}