export function prepareGifts(gifts: number[]): number[] {
  const newGifts = [...gifts];
  newGifts.sort((a, b) => {
    return a - b;
  });
  return Array.from(new Set(newGifts));
}
