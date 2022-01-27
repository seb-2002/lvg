const {
  generateObjectPositions,
  assignBoxClick,
} = require("./scatterBoxes.js");
const { handleLists } = require("./handleLists.js");
const {assignHandleContact} = require('./menu.js');

$(document).ready(function () {

  handleLists("listsParent", "closed", "list");
  assignBoxClick("box");
  generateObjectPositions("box", 85, 0);
  assignHandleContact('contact-box', 'open');
  assignHandleContact('calendar-box', 'open');
});
