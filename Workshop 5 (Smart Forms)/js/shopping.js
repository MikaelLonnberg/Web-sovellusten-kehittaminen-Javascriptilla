// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    'use strict';

    // For storing the order total:
    var total;

    // Get references to the form values:
    var quantity = parseInt(document.getElementById('quantity').value);
    var price = parseFloat(document.getElementById('price').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
    var shipping = parseFloat(document.getElementById('shipping').value);

    // Add validation here later!

    if (isNaN(quantity) || isNaN(price) || isNaN(tax) || isNaN(shipping)) {
        alert("Quantity, price, tax or shipping can't be empty or invalid.");
        return false;
    }

    // Calculate the initial total:
    total = quantity * price;
    total = total + ( 1 * shipping);
    console.log("total before tax: " + total);

    // Make the tax rate easier to use:
    tax = tax / 100;
    tax = tax + 1;

    // Factor in the tax:
    total = total * tax;
    console.log("total after tax: " + total);

    // Factor in the discount:
    if (quantity > 100) {
        total = total - (2 * discount);
    } else {
        total = total - discount;
    }
    if (total < 0){
        total = 0;
    }



    console.log("total after discount: " + total);

    // Format the total to two decimal places:
    total = total.toFixed(2);

    // Display the total:
    document.getElementById('total').value = total;

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
    'use strict';

    // Add an event listener to the form:
    var theForm = document.getElementById('theForm');
    /* if(theForm.addEventListener){
        theForm.addEventListener("submit", code ,false);
    } */

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;


// Tehtävä 1

function validateForm(){
    var x = document.forms[0]["email"].value
    var y = document.forms[0]["comment"].value
    var email = document.forms[0]["email"]
    var comment = document.forms[0]["comment"]

    alert("E-mail: " +x)
    alert("Comment: " +y)

    document.getElementById('feedbackEmail').innerHTML = ""
    document.getElementById('feedbackComment').innerHTML = ""

    if (x.length < 6 || x.length > 15 || x.indexOf('@') === -1 ){
        email.style.borderColor = "red"
        document.getElementById('feedbackEmail').innerHTML="<b>*Fill in properly</b>"
        alert("E-mail must contain @ and be between 6 and 15 characters")
        return false
    }

    if (y.trim() === ""){
        comment.style.borderColor = "red"
        document.getElementById('feedbackComment').innerHTML="<b>*Fill in properly</b>"
        alert("Comment can't be empty")
        return false
    }

    if (y.length > 50){
        comment.value = y.substring(0,50)
        comment.style.borderColor = "red"
        document.getElementById('feedbackComment').innerHTML="<b>*Fill in properly</b>"
        alert("Comment should be under 50 characters")
        return false
    }
    return true
}

// Tehtävä 2

function calcPrice(event){

    event.preventDefault()

    var t = document.forms.theForm.type.value
    var y = parseInt(document.forms.theForm.years.value)

    var prices = {
        "basic": 10,
        "premium": 15,
        "gold": 20,
        "platinum": 25
    }

    var pricePerYear = prices[t]
    var totalCost = pricePerYear * y

    if (y > 1){
        totalCost *= 0.8
    }

    if (y >= 5){
        totalCost -= 5
        document.getElementById('specialGreeting').innerHTML = " <b> 5 years or over means that you'll get an extra $5 discount!</b>"
    }

    document.forms.theForm.cost.value = "$" + totalCost.toFixed(2)
}

// Tehtävä 4
var extraFieldset = document.getElementById('extraFieldset')
    extraFieldset.style.display ="none"

function showExtraFields(){
    var extraFieldset = document.getElementById('extraFieldset')
    var checkBox = document.forms.extraForm.contactme


    if (checkBox.checked){
        extraFieldset.style.display = "block"
    }
    else {
        extraFieldset.style.display ="none"
    }

}

