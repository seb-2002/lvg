const countHTMLObjectsByClass = (className) => {
  let HTMLObjects = $(`.${className}`).length;
  return HTMLObjects;
};

const getNumAbsoluteValue = (max, difference, array) => {
  let newNum = 0;
  let resultsArray = [];
  while (resultsArray.length < array.length) {
    newNum = Math.floor(Math.random() * (max + 1));
    for (let elm of array) {
      if (elm - newNum > difference || elm - newNum < -difference) {
        resultsArray.push(newNum);
      } else {
        resultsArray = [];
      }
    }
    if (resultsArray.length < array.length && resultsArray.length > 0) {
      resultsArray = [];
    }
  }
  const result = resultsArray[0];
  return result;
};

const generatePositionValues = (numberOfElms, rangeOfPxls, minDifPixls) => {
  let topsArray = [0];
  let leftsArray = [0];
  for (let i = 0; i < numberOfElms; i++) {
    let newTop = getNumAbsoluteValue(rangeOfPxls, minDifPixls, topsArray);
    topsArray.push(newTop);
  }
  for (let i = 0; i < numberOfElms; i++) {
    let newLeft = getNumAbsoluteValue(rangeOfPxls, minDifPixls, leftsArray);
    leftsArray.push(newLeft);
  }
  topsArray.shift();
  leftsArray.shift();

  return { topsArray, leftsArray };
};

const assignStyles = (className, posArray1, posArray2) => {
  let howManyObjects = countHTMLObjectsByClass(className);
  for (i = 1; i <= posArray1.length; i++) {
    let thisElm = $(`.${className}_${i}`);
    if (thisElm) {
      console.log(thisElm);
    thisElm.css({"top": `${posArray1[i - 1]}%`, "left": `${posArray2[i - 1]}%`});
   
    }
  }
  return;
};

const generateObjectPositions = (className, rangeOfPxls, minDifPixls) => {
  let howManyObjects = countHTMLObjectsByClass(className);
  let objectPositions = generatePositionValues(
    howManyObjects,
    rangeOfPxls,
    minDifPixls
  );
  let { leftsArray, topsArray } = objectPositions;
  assignStyles(className, topsArray, leftsArray);
  return;
};

module.exports = {
  generateObjectPositions,
};