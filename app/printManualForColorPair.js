const { MajorColorNames, MinorColorNames } = require("../app/constants");
const { getColorFromPairNumber } = require("../app/colorPairUtils");

function printManualForColorPair() {
  const minorSize = MajorColorNames.length;
  const majorSize = MinorColorNames.length;
  let content = '';

  for (let pairNumber = 1; i <= minorSize * majorSize; pairNumber++) {
    const colorPair = getColorFromPairNumber(i);
    content += `The Pair Number is  ${pairNumber} and Corresponsing Color mapping is ${colorPair.toString()}/n`;
  }

  return content;
}

module.export = printManualForColorPair;
