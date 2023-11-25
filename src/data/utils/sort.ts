export function sortByOrder(obj: any) {
  const { arr, attr, type } = obj
  if (type === 'desc') {
    return arr.sort((a: any, b: any) => {
      if (a[attr] > b[attr]) return -1
      if (a[attr] < b[attr]) return 1
      return 0
    })
  }
  return arr.sort((a: any, b: any) => {
    if (a[attr] > b[attr]) return 1
    if (a[attr] < b[attr]) return -1
    return 0
  })
}
