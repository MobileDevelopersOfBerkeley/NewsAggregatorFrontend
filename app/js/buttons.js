$(document).ready(function () {
    $('.tag-cloud').on('click', '#pill', function () {
        $(this).remove();   
    });

    $('.tag-cloud').on('mouseenter', '#pill', function () {
        $(this).addClass('pill-hover');
        $(this).find('#remove').removeClass('hideRemoveBtn');  
        $(this).find('#remove').addClass('showRemoveBtn');  
    });

    $('.tag-cloud').on('mouseleave', '#pill', function () {
        $(this).removeClass('pill-hover');   
        $(this).find('#remove').removeClass('showRemoveBtn');  
        $(this).find('#remove').addClass('hideRemoveBtn');  
    });
});