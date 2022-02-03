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
