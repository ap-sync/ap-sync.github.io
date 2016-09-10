/**
 * Created by Nigel on 5/8/2016.
 */
$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $(".wrapper").toggleClass("toggled");
});

//Copy Function
function copyToClipboard(element) {
    var $temp = $("<textarea></textarea>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

$(document).ready(function () {
    
    $.get("scripts/let_there_be_arduino.txt", function(response) {
        $('#let-be-on-arduino').text(response);
    });

    $.get("scripts/let_there_be_processing.txt", function (response) {
        $('#let-be-on-processing').text(response);
    });

    $.get("scripts/arduino_to_processing.txt" , function (response) {
        $('#send-to-processing').text(response);
    });

    $.get("scripts/arduino_to_p2.txt" , function (response) {
        $('#send-to-processing-code').text(response);
    });

    $.get("scripts/send_to_arduino.txt" , function (response) {
        $('#send-to-arduino').text(response);
    });

    $.get("scripts/send_to_arduino2.txt" , function (response) {
        $('#send-to-arduino-code').text(response);
    });

    $.get("scripts/bi-arduino.txt" , function (response) {
        $('#bi-arduino').text(response);
    });

    $.get("scripts/bi-processing.txt" , function (response) {
        $('#bi-processing').text(response);
    });

});
