import { CategoriaOutputDTO } from "../../dtos/categoria.output.dto";
import CategoriaEntity from "../../entities/categoria.entity";

export interface ICategoriaRepository {
    create(categoria: CategoriaEntity): Promise<CategoriaOutputDTO>;
    findAll(): Promise<CategoriaOutputDTO[]>;
    findByUUID(uuid: string): Promise<CategoriaOutputDTO | null>;
    update(categoria: CategoriaEntity): Promise<CategoriaOutputDTO>;
    delete(uuid: string): Promise<void>;
}