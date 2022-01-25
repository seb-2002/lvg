const {
  generateObjectPositions,
  assignBoxClick,
} = require("./scatterBoxes.js");
const { handleLists } = require("./handleLists.js");

$(document).ready(function () {
  assignBoxClick("box");

  handleLists("listsParent", "closed", "list");

  generateObjectPositions("box", 85, 0);
});
