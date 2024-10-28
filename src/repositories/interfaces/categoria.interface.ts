import CategoriaEntity from "../../entities/categoria.entity";

export interface ICategoriaRepository {
    create(categoria: CategoriaEntity): Promise<CategoriaEntity>;
    findAll(): Promise<CategoriaEntity[]>;
    findByUUID(uuid: string): Promise<CategoriaEntity | null>;
    update(categoria: CategoriaEntity): Promise<CategoriaEntity>;
    delete(categoria: CategoriaEntity): Promise<void>;
}