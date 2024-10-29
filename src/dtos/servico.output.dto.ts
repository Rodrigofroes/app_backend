export interface ServicoOutputDTO {
    id: number;
    uuid: string;
    descricao: string;
    valor: number;
    data: Date;
    usuarioId: number;
    tipoServicoID: number;
}