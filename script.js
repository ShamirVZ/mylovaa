$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#Abrir");
    var btn_reset = $("#Cerrar");
    var backgroundMusic = $("#background-music")[0];

    function open() {
        envelope.addClass("open").removeClass("close");
        backgroundMusic.play();
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
});
