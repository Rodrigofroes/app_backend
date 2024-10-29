import { TipoServicoOutputDTO } from "./tipo.servico.output.dto";
import { UsuarioOutputDTO } from "./usuario.output.dto";

export interface ServicoOutputDTO {
    id: number;
    uuid: string;
    descricao: string;
    valor: number;
    data: Date;
    usuarioId: number;
    tipoServicoID: number;
    usuario?: UsuarioOutputDTO;
    tipoServico?: TipoServicoOutputDTO;
}
