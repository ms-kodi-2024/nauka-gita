$(function() {
    $('img').on('mouseenter', function (event) {
        event.preventDefault();
        $(this).toggleClass('rotated');
    });
});