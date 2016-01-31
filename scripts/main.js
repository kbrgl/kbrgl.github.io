var coverHeightFactor = 1.7;
var containerOffsetFactor = 4;
$(
  function(){
    // calculate my current age. it's typed out.
    now = new Date();
    month = now.getMonth() + 1; // +1 because months are 0-indexed
    myAge = now.getFullYear() - 2002;
    if ((month < 4) && ((month === 3 && now.getDate() < 24) || (month < 3)))  {
        myAge -= 1;
    }
    ageStr = myAge + " year old";

    // randomly choose the xkcd comic to display
    $("#comics").html([
        '<a href="//xkcd.com/366/"><img class="potd" src="http://imgs.xkcd.com/comics/your_mom.png"/></a>',
        '<a href="//xkcd.com/676/"><img class="potd" src="http://imgs.xkcd.com/comics/abstraction.png"/></a>',
        '<a href="//xkcd.com/1597/"><img class="potd" src="https://imgs.xkcd.com/comics/git.png"/></a>',
        '<a href="//xkcd.com/149/"><img class="potd" src="http://imgs.xkcd.com/comics/sandwich.png"/></a>',
    ][Math.floor(Math.random() * 4)]) // 4 is length of array. if another comic is added, 4 must be changed accordingly.
    
    // dynamically size the cover image
    $("#cover").height($(window).height() / coverHeightFactor);
    $(".container").css("top", $(window).height() / containerOffsetFactor);

    // recalculate cover height and container offset in case the orientation changes
    $(window).on("orientationchange", function(){
        // using setTimeout because browser takes a small amount of time to update height
        var setHeight = function() {
            $("#cover").height($(window).height() / coverHeightFactor);
            $(".container").css("top", $(window).height() / containerOffsetFactor);
        };
        setTimeout(setHeight, 500);
    });

    // insert the current year into elements that require it
    $(".js-current-year").html(now.getFullYear());

    // the typing magic happens here
    $("#typed").typed({
            strings: [ageStr, "web designer", "programmer", "Pythonista", "Rubyist", "Clojurist", "Linux geek", "Ubuntu fan", "pirate"],
            // typing speed
            typeSpeed: 50,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "_",
    });
  }
);
