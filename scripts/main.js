$(
  function(){
    now = new Date();
    month = now.getMonth() + 1; // +1 because months are 0-indexed
    myAge = now.getFullYear() - 2002;
    if ((month < 4) && ((month === 3 && now.getDate() < 24) || (month < 3)))  {
        myAge -= 1;
    }
    ageStr = myAge + " year old";
    $("#comics").html([
        '<a href="//xkcd.com/366/"><img class="potd" src="http://imgs.xkcd.com/comics/your_mom.png"/></a>',
        '<a href="//xkcd.com/676/"><img class="potd" src="http://imgs.xkcd.com/comics/abstraction.png"/></a>',
        '<a href="//xkcd.com/329/"><img class="potd" src="http://imgs.xkcd.com/comics/turing_test.png"/></a>',
        '<a href="//xkcd.com/149/"><img class="potd" src="http://imgs.xkcd.com/comics/sandwich.png"/></a>',
    ][Math.floor(Math.random() * 4)]) // 4 is length of array. if another comic is added, 4 must be changed accordingly.
    $(".js-current-year").html(now.getFullYear());
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
