$(function() {
  if (typeof(Storage) !== void(0))  {
    var theme = localStorage.getItem('theme');
    if (theme !== undefined) {
      if (theme === 'minimal') {
        $('html').removeClass('colorful');
        $('html').addClass('minimal');
      }
    }
  }
    $('h1').click(function() {
        if ($('html').hasClass('colorful')) {
            $('html').removeClass('colorful');
            $('html').addClass('minimal');
            if (typeof(Storage) !== void(0)) {
              localStorage.setItem('theme', 'minimal');
            }
        } else if ($('html').hasClass('minimal')) {
            $('html').removeClass('minimal');
            $('html').addClass('colorful');
        }
    });
});
