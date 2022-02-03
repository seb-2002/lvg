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
    if ($(this).parent().hasClass("open")) {
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
