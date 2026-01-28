type ClassificacaoKey = 'excelente' | 'boa' | 'moderada' | 'baixa' | 'critica'

const classificacaoMap: Record<string, ClassificacaoKey> = {
  'Excelente': 'excelente',
  'Boa': 'boa',
  'Moderada': 'moderada',
  'Baixa': 'baixa',
  'Crítica': 'critica'
}

export function normalizarClassificacao(classificacao: string) {
  return classificacaoMap[classificacao] ?? ''
}

export function normalizarNome(texto: string): string {
  const palavrasMinusculas = new Set([
    "de", "da", "do", "das", "dos", "o", "a", "os", "as", "e"
  ]);

  return texto
    .toLowerCase()
    .split(" ")
    .map((palavra, index) => {
      if (index !== 0 && palavrasMinusculas.has(palavra)) {
        return palavra;
      }

      return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    }).join(" ")
}