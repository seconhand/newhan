$(document).ready(function () {
    $(selector).hide();

    $(selector).mouseover(function () { 
        $(selector).slideDown();
    });

    $(selector).mouseleave(function () { 
        $(selector).hide();
    });
});
    