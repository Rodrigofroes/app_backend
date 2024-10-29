import { ServicoOutputDTO } from "../../dtos/servico.output.dto"
import ServicoEntity from "../../entities/servico.entity"

export interface IServicoRepository {
    create(servico: ServicoEntity): Promise<ServicoOutputDTO>
    findAll(): Promise<ServicoOutputDTO[]>
    findByUUID(uuid: string): Promise<ServicoOutputDTO | null>
    update(servico: ServicoEntity): Promise<ServicoOutputDTO>
    delete(uuid: string): Promise<void>
}