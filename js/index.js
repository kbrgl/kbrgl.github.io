$(function() {
    $('h1').click(function() {
        if ($('html').hasClass('colorful')) {
            $('html').removeClass('colorful');
            $('html').addClass('minimal');
        } else if ($('html').hasClass('minimal')) {
            $('html').removeClass('minimal');
            $('html').addClass('colorful');
        }
    });
});
