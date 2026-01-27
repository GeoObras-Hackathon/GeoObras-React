type SituacaoKey = 'concluida' | 'em-execucao' | 'inacabada' | 'cadastrada'

const situacaoMap: Record<string, SituacaoKey> = {
  'Concluída': 'concluida',
  'Em execução': 'em-execucao',
  'Inacabada': 'inacabada',
  'Cadastrada': 'cadastrada'
}

export function normalizarSituacao(situacao: string) {
  return situacaoMap[situacao] ?? 'cadastrada'
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