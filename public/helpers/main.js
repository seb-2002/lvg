const {generateObjectPositions} = require('./scatterBoxes.js');


$(document).ready(function(){

let boxes = $(".box")
generateObjectPositions("box", 75, 5)

});