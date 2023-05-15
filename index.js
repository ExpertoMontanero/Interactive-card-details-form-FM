$(".form-control").hover(
    function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    }
);

$(".form-control").on("focus", function () {
    $(this).addClass("hover");
});