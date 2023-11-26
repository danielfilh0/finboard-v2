export function parseObjToQueryParams(obj: any) {
  return Object.entries(obj)
    .map(
      ([chave, valor]) =>
        `${encodeURIComponent(chave)}=${encodeURIComponent(valor)}`,
    )
    .join('&')
}
