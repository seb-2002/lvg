const {generateObjectPositions} = require('./scatterBoxes.js');
const {handleLists} = require('./handleLists.js');


$(document).ready(function(){

handleLists("listsParent", "closed", "list");

generateObjectPositions("box", 75, 5)

});