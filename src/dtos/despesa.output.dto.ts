export interface DespesaOutputDto {
    id: number;
    uuid: string;
    descricao: string;
    valor: number;
    data: Date;
    categoria?: {
        id: number;
        uuid: string;
        nome: string;
    },
    usuario?: {
        id: number;
        uuid: string;
        nome: string;
        email: string;
    }
}