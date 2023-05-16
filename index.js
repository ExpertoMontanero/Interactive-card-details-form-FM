//buttons hover efect
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
var chAlert = true;
var cnAlert = true;
$("#confirm-btn").on("click", function () {
    // CHECKING INPUTS

    //cardholder name alert
    if (!properNameInput() && chAlert == true) {
        $(".cardholder-form").append("<p class='alert' id='cardholder-alert'>Input your name and surrname properly</p>");
        chAlert = false;
    }
    else if (properNameInput()) {
        chAlert = true;
        $("#cardholder-alert").remove();
    }

    //card number alert
    if ((!$("#card-number-input").val() || $("#card-number-input").val().length < 19) && cnAlert == true) {
        $(".card-number-form").append("<p class='alert' id='card-number-alert'>Card number is too short, 16 digits required</p>");
        cnAlert = false;
    }
    else if ($("#card-number-input").val().length == 19) {
        $('#card-number-alert').remove();
        cnAlert = true;
    }



});
//only numbers on exp date input
$('#mm-exp').on('input', function () {
    var e = $(this).val();
    $('#mm-exp').val(numbersOnly(e));
});

$('#yy-exp').on('input', function () {
    var e = $(this).val();
    $('#yy-exp').val(numbersOnly(e));
});

// checking name input to have space in it
function properNameInput() {
    if ($("#cardholder-name-input").val().includes(" ")) {
        return true;
    }
    else {
        return false;
    }
}

// card number adding '-' and max input length is 16 digits
$('#card-number-input').on('input', function () {
    currentLength = $(this).val().length - 1;
    currentInput = $(this).val();
    if (currentLength < 19) {
        var cardNumber = currentInput.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        var formattedCardNumber = formatCardNumber(cardNumber);
        $(this).val(formattedCardNumber);
    }
    else {
        $(this).val(currentInput.slice(0, currentLength));
    }
});
//adding '-' function to card number
function formatCardNumber(cardNumber) {
    var formatted = '';
    for (var i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += '-';
        }
        formatted += cardNumber.charAt(i);
    }
    return formatted;
};



//numbers only function 

function numbersOnly(element) {
    var sanitizedValue = element.replace(/[^0-9]/g, '');
    return sanitizedValue;
}