export function formatAmount(amount: string) {
  return Number(
    `${amount.substring(0, amount.length - 2)}.${amount.substring(
      amount.length - 2,
      amount.length,
    )}`,
  )
}
