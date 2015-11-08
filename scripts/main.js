$(
  function(){
    $("#occupation").typed({
            strings: ["web designer", "13 year old", "programmer", "Pythonista", "Rubyist", "Clojurist", "Lisper", "Linux geek", "Ubuntu fan", "pirate", "spammer", "Nigerian prince"],
            // typing speed
            typeSpeed: 50,
            // time before typing starts
            // backspacing speed
            backSpeed: 10,
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
