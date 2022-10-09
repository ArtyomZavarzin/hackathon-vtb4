const NAN = '--'

export function asCrypto(n, minDigits = 5, maxDigits = 5) {
  if (!isNaN(Number(n))) {
    //  const newN = Math.floor(n * 100000) / 100000
    return Intl.NumberFormat('fr-LU', {
      minimumFractionDigits: minDigits,
      maximumFractionDigits: maxDigits,
    }).format(n)
  } else {
    return NAN
  }
}
