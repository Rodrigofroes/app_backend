import { CategoriaOutputDTO } from "../dtos/categoria.output";
import { UsuarioOutputDTO } from "../dtos/usuario.output.dto";
import CategoriaEntity from "../entities/categoria.entity";
import prisma from "../prisma/client";
import { ICategoriaRepository } from "./interfaces/categoria.interface";

export default class CategoriaRepository implements ICategoriaRepository {
    public async create(categoria: CategoriaEntity): Promise<CategoriaOutputDTO> {
        // Criação de uma nova categoria usando Prisma
        const categoriaCreated = await prisma.categoria.create({
            data: {
                cat_UUID: categoria.id,
                cat_nome: categoria.nome
            }
        });

        // Retorna uma nova instância de CategoriaEntity com os dados criados
        return this.toMap(categoriaCreated);
    }

    public async findAll(): Promise<CategoriaOutputDTO[]> {
        // Busca todas as categorias no banco de dados
        const categorias = await prisma.categoria.findMany();

        // Mapeia cada categoria para uma instância de CategoriaEntity
        return this.toMapArray(categorias);
    }

    public async findByUUID(uuid: string): Promise<CategoriaOutputDTO | null> {
        // Busca única usando o UUID
        const categoria = await prisma.categoria.findUnique({
            where: {
                cat_UUID: uuid
            }
        });

        // Caso a categoria não seja encontrada, retorna null
        if (!categoria) {
            return null;
        }

        // Retorna uma instância de CategoriaEntity com os dados encontrados
        return this.toMap(categoria);
    }

    public async update(categoria: CategoriaEntity): Promise<CategoriaOutputDTO> {
        // Atualiza a categoria existente no banco de dados usando UUID
        const categoriaUpdated = await prisma.categoria.update({
            where: {
                cat_UUID: categoria.id // Atualização baseada no UUID
            },
            data: {
                cat_nome: categoria.nome
            }
        });

        // Retorna uma nova instância de CategoriaEntity com os dados atualizados
        return this.toMap(categoriaUpdated);
    }

    public async delete(uuid: string): Promise<void> {
        await prisma.categoria.delete({
            where: {
                cat_UUID: uuid
            }
        });

        return;
    }

    // Método para mapear um único usuario do banco para UsuarioOutputDTO
    private toMap(categoria: any): CategoriaOutputDTO {
        return {
            id: categoria.cat_UUID,
            nome: categoria.cat_nome,
        };
    }

    // Método para mapear uma lista de usuarios do banco para UsuarioOutputDTO[]
    private toMapArray(categorias: any[]): CategoriaOutputDTO[] {
        return categorias.map(categoria => this.toMap(categoria));
    }
}