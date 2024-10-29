import { TipoServicoOutputDTO } from "../../dtos/tipo.servico.output.dto";
import TipoServicoEntity from "../../entities/tipo.servico.entity";

export interface ITipoServicoRepository {
    create(tipoServico: TipoServicoEntity): Promise<TipoServicoOutputDTO>;
    update(tipoServico: TipoServicoEntity): Promise<TipoServicoOutputDTO>;
    delete(uuid: string): Promise<void>;
    findAll(): Promise<TipoServicoOutputDTO[]>;
    findByUUID(uuid: string): Promise<TipoServicoOutputDTO | null>;
}