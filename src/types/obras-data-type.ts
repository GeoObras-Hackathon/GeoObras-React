export type obrasDataType = {
  idUnico: string;
  identificacao: {
    nome: string;
    situacao: string;
    municipio: string;
    is_bim: boolean;
  };
  financeiro: {
    valor_total_contratado: number;
    valor_pago_acumulado: number;
    valor_previsto_original: number;
    percentual_desembolso: number;
    gap_financeiro_fisico: number;
    tem_contrato: boolean;
  };
  social: {
    populacao_beneficiada: number;
    empregos_gerados: number;
  };
  cronograma: {
    data_inicio: string;
    data_fim_prevista: string;
    data_fim_real: string;
    percentual_fisico: number;
  };
  metadados: {
    data_coleta: string;
    fonte: string;
  };
  geolocalizacao: {
    latitude: number;
    longitude: number;
  };
  indices: {
    eficiencia_cronograma: number;
    classificacao: string;
    risco_gestao: string;
  }
}