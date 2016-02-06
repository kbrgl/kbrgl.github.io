var coverHeightFactor = 1.7;
var containerOffsetFactor = 4;
var comics = [
        '<a href="//xkcd.com/366/"><img class="potd" src="http://imgs.xkcd.com/comics/your_mom.png" alt="xkcd comic strip"/></a>',
        '<a href="//xkcd.com/676/"><img class="potd" src="http://imgs.xkcd.com/comics/abstraction.png" alt="xkcd comic strip"/></a>',
        '<a href="//xkcd.com/1597/"><img class="potd" src="https://imgs.xkcd.com/comics/git.png" alt="xkcd comic strip"/></a>',
        '<a href="//xkcd.com/149/"><img class="potd" src="http://imgs.xkcd.com/comics/sandwich.png" alt="xkcd comic strip"/></a>',
];
$(
  function(){
    // calculate my current age
    now = new Date();
    month = now.getMonth() + 1; // +1 because months are 0-indexed
    myAge = now.getFullYear() - 2002;
    if ((month < 4) && ((month === 3 && now.getDate() < 24) || (month < 3)))  {
        myAge -= 1;
    }
    ageStr = myAge + " year old";

    // randomly choose the xkcd comic to display
    $("#comics").html(comics[Math.floor(Math.random() * 4)])
    
    // dynamically size the cover image
    $("#cover").height($(window).height() / coverHeightFactor);
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
