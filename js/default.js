var coverHeightFactor = 1.7;
var containerOffsetFactor = 4;
$(
  function(){
    // dynamically size the cover image
    $("#cover-img").height($(window).height() / coverHeightFactor);
    $(".container").css("top", $(window).height() / containerOffsetFactor);

    // recalculate cover height and container offset in case the orientation changes
    $(window).on("orientationchange", function(){
        // using setTimeout because animate the orientation change and if jQuery captures the new dimensions during the animation then we get a pretty funky result
        var setHeight = function() {
            $("#cover").height($(window).height() / coverHeightFactor);
            $(".container").css("top", $(window).height() / containerOffsetFactor);
        };
        setTimeout(setHeight, 500);
    });

    // get current date; months are 0-indexed
    now = new Date();

    // insert the current year into elements that require it
    $(".js-current-year").html(now.getFullYear());
  }
);
