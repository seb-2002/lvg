(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function assignParentClass(parentClass1, parentClass2, childClass) {
  let lists = $(`.${childClass}`);
  let listsParent = lists.parent();
  listsParent.addClass(parentClass1);
  listsParent.addClass(parentClass2);
}

function assignParentGroup() {
  $(".group-1").parent().addClass("parent_group-1");
  $(".group-2").parent().addClass("parent_group-2");
  $(".group-3").parent().addClass("parent_group-3");
}

// function addClickListenerOpenBox(parentClass) {
//   $(`.${parentClass}`).on("click", function () {
//     if ($(this).hasClass("closed")) {
//       $(this).addClass("open").removeClass("closed");
//       $(this).children().removeClass("hidden");
//     }
//     // else if ($(this).hasClass("open") && $(this).hasClass("focused")) {
//     //   $(this).addClass("closed").removeClass("open");
//     //   $(this).children(".listItem").addClass("hidden");
//     // }
//   });
// }

function addClickListenerCloseBox(h2Class, parentClass, siblingClass) {
  $(`.${h2Class}`).on("click", function () {
    if ($(this).parent().hasClass("open")&& $(this).parent().hasClass("focused")) {
      console.log("click!");
      $(this).parent(`.${parentClass}`).addClass("closed").removeClass("open");
      $(this).siblings(`.${siblingClass}`).addClass("hidden");
    } else if ($(this).parent().hasClass("closed")) {
      $(this).parent(`.${parentClass}`).addClass("open").removeClass("closed");
      $(this).siblings(`.${siblingClass}`).removeClass("hidden");
    }
  });
}

function handleLists(
  parentClass1,
  parentClass2,
  childClass,
  h2Class,
  siblingClass
) {
  assignParentClass(parentClass1, parentClass2, childClass);
  // addClickListenerOpenBox(parentClass1);
  addClickListenerCloseBox(h2Class, parentClass1, siblingClass);
  assignParentGroup();
}

module.exports = {
  handleLists,
};

},{}],2:[function(require,module,exports){
const {
  generateObjectPositions,
  assignBoxClick,
} = require("./scatterBoxes.js");
const { handleLists } = require("./handleLists.js");
const { assignHandleContact } = require("./menu.js");

$(document).ready(function () {
  handleLists("listsParent", "closed", "list", "menu-text", "listItem");
  assignBoxClick("clickable");
  generateObjectPositions("box", 85, 2);
  assignHandleContact("contact-box", "open");
  assignHandleContact("calendar-box", "open");
});

},{"./handleLists.js":1,"./menu.js":3,"./scatterBoxes.js":4}],3:[function(require,module,exports){

function assignHandleContact(className, newClass) {
  $(`.${className}`).on('click', () => {
    if($(`.${className}`).hasClass('closed')) {
      $(`.${className}`).addClass(newClass).removeClass("closed");
    } else if ($(`.${className}`).hasClass(newClass)) {
      $(`.${className}`).addClass("closed").removeClass(newClass);

    }
  });
 
}

module.exports = {
  assignHandleContact
}
},{}],4:[function(require,module,exports){
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
      thisElm.css({
        top: `${posArray1[i - 1]}%`,
        left: `${posArray2[i - 1]}%`,
      });
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

function incrementZ(id) {
  let z = $(`#${id}`);
  let thisZ = parseInt(z.html());

  let nextZ = thisZ + 1;
  z.html(nextZ);

  return thisZ;
}

const assignBoxClick = (className) => {
  $(`.${className}`).on("click", function () {
    if ($(this).hasClass("unfocused")) {
      let thisZ = incrementZ("z-index") + 4;

      $(this)
        .addClass("focused")
        .removeClass("unfocused")
        .css("z-index", thisZ);
      if ($(this).siblings().hasClass("focused")) {
        $(this).siblings().addClass("unfocused").removeClass("focused");
      }
    }
  });
};

module.exports = {
  generateObjectPositions,
  assignBoxClick,
};

},{}]},{},[2]);
