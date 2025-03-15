$(document).ready(function () {
    function resizeBook() {
        let screenWidth = $(window).width();
        let bookWidth, bookHeight;

        if (screenWidth < 600) {
            bookWidth = screenWidth * 0.9; // 90% da tela
            bookHeight = bookWidth * 0.75; // Mantendo proporção
        } else {
            bookWidth = 900; // Tamanho fixo para telas grandes
            bookHeight = 700;
        }

        $(".flipbook").turn("size", bookWidth, bookHeight);
    }

    $(".flipbook").turn({
        width: 600,
        height: 840,
        autoCenter: true
    });

    $(window).on("resize", resizeBook);
    resizeBook();

    $("#prev").click(function () {
        $(".flipbook").turn("previous");
    });

    $("#next").click(function () {
        $(".flipbook").turn("next");
    });
});
