$(document).ready(function () {
    $("#design-pic").click(function () {
        $("#design").toggle()
        $("#design-pic").hide()
    });
    $("#design").click(function () {
        $("#design-pic").toggle()
        $("#design").hide()
    });
});