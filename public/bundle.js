(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function assignParentClass (parentClass1, parentClass2, childClass) {
let lists = $(`.${childClass}`);
let listsParent = lists.parent();
listsParent.addClass(parentClass1);
listsParent.addClass(parentClass2);

}

function incrementZ(id) {
  let z = $(`#${id}`);
 let thisZ = parseInt(z.html());
 let nextZ = thisZ+1;
z.html(nextZ);
 

 return thisZ;
 
}


function addClickListener (parentClass) {
  $(`.${parentClass}`).click(function() {
    if ($(this).hasClass('closed')){
    let thisZ = incrementZ("z-index");
    $(this).addClass('open').removeClass('closed');
    $(this).css({"z-index": thisZ, "opacity": "1"});
    $(this).children().removeClass("hidden");
   
    } else if ($(this).hasClass('open')) {
    $(this).addClass('closed').removeClass('open');
    $(this).css("opacity", .8);
    $(this).children(".listItem").addClass("hidden");

    }
  })
}

function handleLists(parentClass1, parentClass2, childClass) {
  assignParentClass(parentClass1, parentClass2, childClass);
  addClickListener(parentClass1);

}

module.exports = {
  handleLists
}




},{}],2:[function(require,module,exports){
const {generateObjectPositions} = require('./scatterBoxes.js');
const {handleLists} = require('./handleLists.js');


$(document).ready(function(){

handleLists("listsParent", "closed", "list");

generateObjectPositions("box", 75, 5)

});
},{"./handleLists.js":1,"./scatterBoxes.js":3}],3:[function(require,module,exports){
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
},{}]},{},[2]);
