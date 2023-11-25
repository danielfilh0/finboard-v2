export function filterByString(arr: any[], filters: {}) {
  return arr.filter((transaction) =>
    Object.entries(filters).every(([key, value]) => {
      if (value) {
        return transaction[key].toLowerCase().includes(value.toLowerCase())
      }
      return true
    }),
  )
}
