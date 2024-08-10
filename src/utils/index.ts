export function toRupiah(amount: number, withSymbol: boolean = false): string {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const formattedAmount = formatter.format(amount);

  // Optionally remove the "Rp" symbol
  return withSymbol
    ? formattedAmount
    : formattedAmount.replace("Rp", "").trim();
}
