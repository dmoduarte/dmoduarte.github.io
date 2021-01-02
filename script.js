$(document).ready(function () {

    $(".carousel").carousel();

    $(".tab-opener").on('click', function (e) {

        $(".topnavbutton.active").removeClass("active");
        $("#" + $(this).attr('id') + ".topnavbutton").addClass("active");
        $(".body>div.active").removeClass("active");
        $("." + $(this).data().tab).addClass("active");

    });

    const showMore = $("#show-more");

    //This handles the user-click on the mobile menu
    $('a[href="#show-more"]').on('click', function () {
        showMore.toggleClass("active");
    });

    //This handles the click on the mobile menu item
   /* showMore.on('click', 'a', function (e) {

        $(".topnavbutton.active").removeClass("active");
        $(this).addClass("active");
        $(".body>div.active").removeClass("active");
        $("." + $(this).data().tab).addClass("active");
        showMore.removeClass("active");

    });*/

});