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


// CHECKING INPUTS
var chAlert = true;
var cnAlert = true;
var expAlert = true;
var cvcAlert = true;
var chAlt = true;
var cnAlt = true;
var expAlt = true;
var cvcAlt = true;
$("#confirm-btn").on("click", function () {

    //cardholder name input alert
    if (!properNameInput() && chAlert == true) {
        $(".cardholder-form").append("<p class='alert' id='cardholder-alert'>Input your name and surrname properly</p>");
        $("#cardholder-name-input").addClass("alert-border");
        chAlert = false;
        chAlt = true;
    }
    else if (properNameInput()) {
        $("#cardholder-alert").remove();
        $("#cardholder-name-input").removeClass("alert-border");
        chAlert = true;
        chAlt = false;
    }

    //card number input alert
    if ((!$("#card-number-input").val() || $("#card-number-input").val().length < 19) && cnAlert == true) {
        $(".card-number-form").append("<p class='alert' id='card-number-alert'>Card number is too short, 16 digits required</p>");
        $("#card-number-input").addClass("alert-border");
        cnAlert = false;
        cnAlt = true;
    }
    else if ($("#card-number-input").val().length == 19) {
        $('#card-number-alert').remove();
        $("#card-number-input").removeClass("alert-border");
        cnAlert = true;
        cnAlt = false;
    }
    //expiration date input alert
    if (!($("#mm-exp").val() && $("#yy-exp").val()) && expAlert == true) {
        $(".exp-date").append("<p class='alert' id='exp-date-alert'>Can't be blank</p>");
        $(".exp-dates").addClass("alert-border");
        expAlert = false;
        expAlt = true;
    }
    else if (($("#mm-exp").val() && $("#yy-exp").val())) {
        $("#exp-date-alert").remove();
        $(".exp-dates").removeClass("alert-border");
        expAlert = true;
        expAlt = false;
    }
    //cvc input alert
    if ($("#cvc-input").val().length < 3 && cvcAlert == true) {
        $("#cvc-input").addClass("alert-border");
        cvcAlert = false;
        cvcAlt = true;
    }
    else if ($("#cvc-input").val().length == 3) {
        $("#cvc-input").removeClass("alert-border");
        cvcAlert = true;
        cvcAlt = false;
    }

    if (cvcAlt == false && cnAlt == false && expAlt == false && chAlt == false) {
        SubmitFunction();
    };
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
    var currentLength = $(this).val().length - 1;
    var currentInput = $(this).val();
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

//Expiricy date input optimalization 

//only numbers on exp date input
$('#mm-exp').on('input', function () {
    var e = $(this).val();
    $('#mm-exp').val(numbersOnly(e));
});

$('#yy-exp').on('input', function () {
    var e = $(this).val();
    $('#yy-exp').val(numbersOnly(e));
});

//two numbers input only function (used to moths and years input)
function numbersOnly(element) {
    if (element.length <= 2) {
        var sanitizedValue = element.replace(/[^0-9]/g, '');
        return sanitizedValue;
    }
    else {
        var sanitizedValue = element.slice(0, -1);
        return sanitizedValue;
    }
}

//input months from 1 to 12 only 
$("#mm-exp").on("input", function () {
    var currentLength = $(this).val().length;
    var currentInput = $(this).val();
    var lastCharacter = currentInput.slice(-1);
    var firstCharacter = $(this).val().charAt(0);
    var regexFirst = /^[01]$/;
    var regexSecond = /^[0-2]$/;

    if (!regexFirst.test(currentInput) && currentLength == 1) {
        $(this).val("");
    }
    if (firstCharacter == 0) {

    }
    else if (currentLength == 2 && !regexSecond.test(lastCharacter)) {
        $(this).val("");
    }
});

//CVC code input
$('#cvc-input').on('input', function () {
    var inputValue = $(this).val();
    var sanitizedValue = inputValue.replace(/\D/g, '');
    sanitizedValue = sanitizedValue.slice(0, 3);
    $(this).val(sanitizedValue);
});

//CHANGING CARDS STYLE


//cardholder name
$("#cardholder-name-input").on("input", function () {
    $("#card-holder-name").text($('#cardholder-name-input').val().toUpperCase());//upper case added
});

//card number
$("#card-number-input").on("input", function () {
    $("#card-number").text($('#card-number-input').val());
});

//month 
$("#mm-exp").on("input", function () {
    $("#mm").text($("#mm-exp").val())
});

//year
$("#yy-exp").on("input", function () {
    $("#yy").text($("#yy-exp").val())
});

//cvv code
$("#cvc-input").on("input", function () {
    $("#cvc-card").text($("#cvc-input").val());
});


//SUBMITED STATE
function SubmitFunction() {
    $(".right").empty();
    var submitedHTML = `<div class="container-fluid" id="submited">
    <img src="images/icon-complete.svg" alt="icon-completed">
    <h1 id="thank-you">THANK YOU!</h1>
    <p id="submited-text">We've added your card details</p>
    <div class="btn mb-1 rounded" id="continue-btn">Continue</div>
  </div>`;
    $(".right").append(submitedHTML);
}