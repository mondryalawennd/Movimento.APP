export interface MovimentoManual{
    id?: string;
    mes: number;
    ano: number;
    produtoId: string;
    cosifId: string;
    valor: number;
    descricao: string;
    dataMovimento?: Date;
    numeroLancamento?: number;
}