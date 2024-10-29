export interface ServicoOutputDTO {
    id: number;
    uuid: string;
    descricao: string;
    valor: number;
    data: Date;
    usuarioId: number;
    tipoServicoID: number;
    usuario?: {
        id: number;
        uuid: string;
        nome: string;
        email: string;
    };
    tipoServico?: {
        id: number;
        uuid: string;
        nome: string;
    };
}
