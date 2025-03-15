$(document).ready(function () {
    $(".flipbook").turn({
        width: 900,
        height: 700,
        autoCenter: true,
        display: "double",
        elevation: 50,
        gradients: true,
    });

    $("#prev").click(function () {
        $(".flipbook").turn("previous");
    });

    $("#next").click(function () {
        $(".flipbook").turn("next");
    });
});
