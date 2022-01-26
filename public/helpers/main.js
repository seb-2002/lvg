const {
  generateObjectPositions,
  assignBoxClick,
} = require("./scatterBoxes.js");
const { handleLists } = require("./handleLists.js");

$(document).ready(function () {

  handleLists("listsParent", "closed", "list");
  assignBoxClick("box");

  generateObjectPositions("box", 85, 0);
});
