// I Ctrl-C Ctrl-V'd this from Stack Overflow
/*$(function(){
  var
    $win = $(window),
    $filter = $('.navbar'),
    $filterSpacer = $('<div />', {
      "class": "filter-drop-spacer",
      "height": $filter.outerHeight()
    });
  $win.scroll(function(){
    if(!$filter.hasClass('docked') && $win.scrollTop() > $filter.offset().top){
      $filter.before($filterSpacer);
      $filter.addClass("docked");
    } else if ($filter.hasClass('docked')  && $win.scrollTop() < $filterSpacer.offset().top){
      $filter.removeClass("docked");
      $filterSpacer.remove();
    }
  });
});*/
