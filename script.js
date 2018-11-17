$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        var $pic = $("#main-page");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $pic.height());
    });
});
	