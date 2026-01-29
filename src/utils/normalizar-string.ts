const classificacaoMap: Record<string, string> = {
  'Excelente': 'excelente',
  'Boa': 'boa',
  'Moderada': 'moderada',
  'Baixa': 'baixa',
  'Crítica': 'critica'
}

export function normalizarClassificacao(classificacao: string) {
  return classificacaoMap[classificacao] ?? ''
}

export function normalizarNome(texto: string) {
  const palavrasMinusculas = new Set([
    'de', 'da', 'do', 'das', 'dos', 'o', 'a', 'os', 'as', 'e'
  ])

  return texto
    .toLowerCase()
    .split(' ')
    .map((palavra, index) => {
      if (index !== 0 && palavrasMinusculas.has(palavra)) {
        return palavra
      }

      return palavra.charAt(0).toUpperCase() + palavra.slice(1)
    }).join(' ')
}

export function normalizarData(data: string) {
  if (data === 'Informação Pendente') return 'Não informado'

  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

export function normalizarValor(valor: number) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
  }).format(valor)
}

const filtrosMap: Record<string, string> = {
  situacao: 'Situação',
  eficiencia_minima: 'Classificação mínima',
  risco: 'Risco de gestão',
  valor_minimo: 'Valor mínimo',
  '0.4': 'Crítica',
  '0.7': 'Baixa',
  '1': 'Moderada',
  '1.2': 'Boa',
  '1.5': 'Excelente',
}

export function normalizarFiltro(filtro: string) {
  return filtrosMap[filtro] ?? filtro
}