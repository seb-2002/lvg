
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