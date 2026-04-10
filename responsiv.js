$(document).ready(function() {


    var resize = function() {
        if ($(window).width() > 400) {
            $('.padding').css('padding-top', '1.5vh')
            $('.box').css('height', '29vh')
        }
        if ($(window).width() > 1000) {
            $('.padding').css('padding-top', '1.5vh')
            $('.paddingIcon').css('padding-top', '3vh')
            $('p').css('font-zise', '5vh')
            $('.box').css('height', '15vh')
        }
    };
    resize();
    $(window).resize(resize);
});

$("#add").click(function() {
    $(".container-fluid").hide("normal");
    $("#labtop").show("normal");
});

