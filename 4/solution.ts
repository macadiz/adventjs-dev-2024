export function createXmasTree(height: number, ornament: string): string {
  const treeFrameLength = (height * 2) - 1;

  const tree = Array.from({ length: height}).reduce((acc, _, idx) => {
    const ornamentCount = ((idx + 1) * 2) - 1;
    const ornamentPad = (treeFrameLength - ornamentCount) / 2;
    acc += `${ornament
                      .repeat(ornamentCount)
                      .padStart(ornamentPad + ornamentCount, '_')
                      .padEnd(treeFrameLength, "_")}\n`;
    return acc;
  }, "");

  const trunkPad = (treeFrameLength - 1) / 2;
  const trunk = `${"#"
                      .padStart(trunkPad + 1, "_")
                      .padEnd(treeFrameLength, "_")}`;

  return `${tree}${trunk}\n${trunk}`;
}