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


export function normalizarSituacao(nome: string) {
  return nome
    .replace(' ', '-')
    .replace('í', 'i')
    .replace('ã', 'a')
    .replace('ç', 'c')
    .toLowerCase()
}