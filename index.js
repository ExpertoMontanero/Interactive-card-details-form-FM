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

var chAlert=true;
var cnAlert=true;
$("#confirm-btn").on("click", function () {
    // CHECKING INPUTS

    //cardholder name
    if (!$("#cardholder-name-input").val()&&chAlert==true) {
        $(".cardholder-form").append("<p class='alert' id='cardholder-alert'>Please enter proper name</p>");
        chAlert=false;
    }
    if($("#cardholder-name-input").val()) {
        chAlert=true;
        $("#cardholder-alert").remove();
    }

    //card number
    if (!$("#card-number-input").val()&&cnAlert==true) {
        $(".card-number-form").append("<p class='alert' id='card-number-alert'>Wrong format, 16 numbers only</p>");
        cnAlert=false;
    }
    if($("#card-number-input").val()) {
        cnAlert=true;
        $("#card-number-alert").remove();
    }
});
