// toggle navbar in the top of the page
$(window).scroll(function() {
  let Top = $(window).scrollTop();
  if (Top >= $("nav").outerHeight(true) + 150) {
    $("nav").addClass("fixed-top");
  } else {
    $("nav").removeClass("fixed-top");
  }
});
