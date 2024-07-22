import { MajorColorNames, MinorColorNames } from "./constants";
import { getColorFromPairNumber } from "./colorPairUtils";

function printManualForColorPair() {
  const minorSize = MajorColorNames.length;
  const majorSize = MinorColorNames.length;
  let content = '';

  for (let pairNumber = 1; i <= minorSize * majorSize; pairNumber++) {
    const colorPair = getColorFromPairNumber(i);
    content += `Pair Number: ${pairNumber}, Colors: ${colorPair.toString()}\n`;
  }

  return content;
}

export default { printManualForColorPair };