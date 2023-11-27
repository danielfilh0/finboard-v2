export function filterByString(arr: any[], filters: {}) {
  return arr.filter((transaction) =>
    Object.entries(filters).every(([key, value]) => {
      if (value) {
        const parsedValue = value as string
        return transaction[key]
          .toLowerCase()
          .includes(parsedValue.toLowerCase())
      }
      return true
    }),
  )
}
