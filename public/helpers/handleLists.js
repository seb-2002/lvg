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



