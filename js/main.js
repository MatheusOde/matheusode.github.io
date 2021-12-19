$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('.first-introduction').scss({
        opacity: function() {
            var elementHeight = $(this).height();
            return 1 - (elementHeight - scrollTop) / elementHeight;
        }
    });
});