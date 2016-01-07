$(
  function(){
    myBirthday = new Date("March 24, 2002");
    bdayYear = myBirthday.getFullYear();
    bday = myBirthday.getDate();
    bdayMonth = myBirthday.getMonth() + 1;
    dateToday = new Date();
    year = dateToday.getFullYear();
    day = dateToday.getDate();
    month = dateToday.getMonth() + 1; // +1 because months are 0-indexed
    myAge = year - bdayYear;
    if (month < 4)  {
        if ((month === 3 && day < 24) || month < 3) {
            myAge -= 1;
        }
    }
    ageStr = myAge + " years old";
    $("#occupation").typed({
            strings: ["web designer", ageStr, "programmer", "Pythonista", "Rubyist", "Clojurist", "Lisper", "Linux geek", "Ubuntu fan", "pirate"],
            // typing speed
            typeSpeed: 60,
            // time before typing starts
            // backspacing speed
            backSpeed: 30,
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
