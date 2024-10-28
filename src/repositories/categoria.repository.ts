import CategoriaEntity from "../entities/categoria.entity";
import prisma from "../prisma/client";
import { ICategoriaRepository } from "./interfaces/categoria.interface";

export default class CategoriaRepository implements ICategoriaRepository {
    public async create(categoria: CategoriaEntity): Promise<CategoriaEntity> {
        // Criação de uma nova categoria usando Prisma
        const categoriaCreated = await prisma.categoria.create({
            data: {
                cat_UUID: categoria.id,
                cat_nome: categoria.nome
            }
        });

        // Retorna uma nova instância de CategoriaEntity com os dados criados
        return CategoriaEntity.create(categoriaCreated.cat_nome);
    }

    public async findAll(): Promise<CategoriaEntity[]> {
        // Busca todas as categorias no banco de dados
        const categorias = await prisma.categoria.findMany();

        // Mapeia cada categoria para uma instância de CategoriaEntity
        return categorias.map(categoria => CategoriaEntity.create(categoria.cat_nome));
    }

    public async findByUUID(uuid: string): Promise<CategoriaEntity | null> {
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
        return CategoriaEntity.create(categoria.cat_nome);
    }

    public async update(categoria: CategoriaEntity): Promise<CategoriaEntity> {
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
        return CategoriaEntity.create(categoriaUpdated.cat_nome);
    }

    public async delete(categoria: CategoriaEntity): Promise<void> {
        await prisma.categoria.delete({
            where: {
                cat_UUID: categoria.id
            }
        });
    }
}