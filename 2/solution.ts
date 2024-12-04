export function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map((name) => name.length));

  const topBottomFrame = "*".repeat(maxLength + 4);

  const content = names.map((name) => {
    return `* ${name.padEnd(maxLength, ' ')} *`;
  }).join("\n");

  return `${topBottomFrame}\n${content}\n${topBottomFrame}`;
}