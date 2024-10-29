import { DespesaOutputDto } from "../../dtos/despesa.output.dto";
import DespesaEntity from "../../entities/despesa.entity";

export interface IDespesaRepository {
    create(despesa: DespesaEntity): Promise<DespesaOutputDto>
    findAll(): Promise<DespesaOutputDto[]>
    findByUUID(uuid: string): Promise<DespesaOutputDto | null>
    update(despesa: DespesaEntity): Promise<DespesaOutputDto>
    delete(uuid: string): Promise<void>
}