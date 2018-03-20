$().ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".new-clickable").click(function() {
    $("#sandcastles-show").toggle();
    $("#sandcastles-hidden").toggle();
  });
});
