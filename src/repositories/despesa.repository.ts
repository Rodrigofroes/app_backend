import { DespesaOutputDto } from "../dtos/despesa.output.dto";
import DespesaEntity from "../entities/despesa.entity";
import prisma from "../prisma/client";
import { IDespesaRepository } from "./interfaces/despesa.interface";

export default class DespesaRepository implements IDespesaRepository {
    public async create(despesa: DespesaEntity): Promise<DespesaOutputDto> {
        const createdDespesa = await prisma.despesa.create({
            data: {
                des_UUID: despesa.id,
                des_descricao: despesa.descricao,
                des_valor: despesa.valor,
                des_data: despesa.data,
                des_usu_id: despesa.usuario,
                des_cat_id: despesa.categoria
            }
        });

        return this.toMap(createdDespesa);
    }

    public async findAll(): Promise<DespesaOutputDto[]> {
        const despesas = await prisma.despesa.findMany({
            include: {
                usuario: true,
                categoria: true
            }
        });

        return this.toMapArray(despesas);
    }
    public async findByUUID(uuid: string): Promise<DespesaOutputDto | null> {
        const despesa = await prisma.despesa.findUnique({
            where: {
                des_UUID: uuid
            },
            include: {
                usuario: true,
                categoria: true
            }
        });

        if (!despesa) return null;

        return this.toMap(despesa);
    }
    public async update(despesa: DespesaEntity): Promise<DespesaOutputDto> {
        const updatedDespesa = await prisma.despesa.update({
            where: {
                des_UUID: despesa.id
            },
            data: {
                des_descricao: despesa.descricao,
                des_valor: despesa.valor,
                des_data: despesa.data,
                des_usu_id: despesa.usuario,
                des_cat_id: despesa.categoria
            },
            include: {
                usuario: true,
                categoria: true
            }
        });

        return this.toMap(updatedDespesa);
    }
    public async delete(uuid: string): Promise<void> {
        await prisma.despesa.delete({
            where: {
                des_UUID: uuid
            }
        });
    }

    // Método para mapear um único usuário do banco para UsuarioOutputDTO
    public toMap(despesa: any): DespesaOutputDto {
        console.log(despesa);
        return {
            id: despesa.des_id,
            uuid: despesa.des_UUID,
            descricao: despesa.des_descricao,
            valor: despesa.des_valor,
            data: despesa.des_data,
            usuario: {
                id: despesa.usuario.usu_id,
                uuid: despesa.usuario.usu_UUID,
                nome: despesa.usuario.usu_nome,
                email: despesa.usuario.usu_email
            },  // Mapeia o objeto completo se `usuario` existir
            categoria: {
                id: despesa.categoria.cat_id,
                uuid: despesa.categoria.cat_UUID,
                nome: despesa.categoria.cat_nome
            } // Mapeia o objeto completo se `categoria` existir
        };
    }

    // Método para mapear uma lista de despesas do banco para DespesaOutputDto[]
    public toMapArray(despesas: any[]): DespesaOutputDto[] {
        return despesas.map(despesa => this.toMap(despesa));
    }
}