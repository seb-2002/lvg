function assignParentClass(parentClass1, parentClass2, childClass) {
  let lists = $(`.${childClass}`);
  let listsParent = lists.parent();
  listsParent.addClass(parentClass1);
  listsParent.addClass(parentClass2);
}

function assignParentGroup() {
  $(".group-1").parent().addClass('parent_group-1');
  $(".group-2").parent().addClass('parent_group-2');
  $(".group-3").parent().addClass('parent_group-3');
}


function addClickListener(parentClass) {
  $(`.${parentClass}`).on("click", function () {
    if ($(this).hasClass("closed")) {
      $(this).addClass("open").removeClass("closed");
      $(this).children().removeClass("hidden");
    } else if ($(this).hasClass("open") && $(this).hasClass("focused")){
          $(this).addClass("closed").removeClass("open");
          $(this).children(".listItem").addClass("hidden");
    }
  });
}

function handleLists(parentClass1, parentClass2, childClass) {
  assignParentClass(parentClass1, parentClass2, childClass);
  addClickListener(parentClass1);
  assignParentGroup();
}

module.exports = {
  handleLists,
};
