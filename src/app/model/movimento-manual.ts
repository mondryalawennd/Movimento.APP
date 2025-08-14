export interface MovimentoManual{

    mes?: number;
    ano?: number;
    codigoProduto: string;
    codigoCosif: string;
    valorMovimento?: number;
    descricaoProduto?: string;
    descricaoMovimento?: string;
    dataMovimento?: Date;
    numeroLancamento?: number;
}