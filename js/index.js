var comics = [
        '<a href="//xkcd.com/366/"><img class="potd" src="http://imgs.xkcd.com/comics/your_mom.png" alt="xkcd comic strip"/></a>',
        '<a href="//xkcd.com/676/"><img class="potd" src="http://imgs.xkcd.com/comics/abstraction.png" alt="xkcd comic strip"/></a>',
        '<a href="//xkcd.com/1597/"><img class="potd" src="https://imgs.xkcd.com/comics/git.png" alt="xkcd comic strip"/></a>',
        '<a href="//xkcd.com/149/"><img class="potd" src="http://imgs.xkcd.com/comics/sandwich.png" alt="xkcd comic strip"/></a>',
];
$(
    function() {
        // calculate my current age
        now = new Date();
        month = now.getMonth() + 1; // +1 because months are 0-indexed
        age = now.getFullYear() - 2002;
        if ((month === 2 && now.getDate() < 24) || (month < 2))  {
            age -= 1;
        }
        ageStr = age + " year old";

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

        // randomly choose the xkcd comic to display
        $("#comics").html(comics[Math.floor(Math.random() * 4)])
    }
);