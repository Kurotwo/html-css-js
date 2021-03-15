function validateInput() {
    // Retrieve the input values from the DOM
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    // Retrieve the greeting node from the DOM
    let greetingElement = document.getElementById('greeting-message');

    // Keep track of empty values
    let hasEmptyValues = false;
    // Place input values in an array
    let inputValues = [firstName, lastName];
    let inputLabels = document.getElementsByClassName('form-label');
    // Iterate through each input value
    for (let i = 0; i < inputValues.length; i++) {
        // If input for label is empty, then set color to red
        if (inputValues[i] == "") {
            inputLabels[i].style.color = "red";
            hasEmptyValues = true;
        } else {
        // Otherwise, set to default
            inputLabels[i].style.color = "";
        }
    }

    // If there are no empty values then greet user
    if (!hasEmptyValues) {
        greetingElement.innerText = "Hello! " + firstName + " " + lastName;
    } else {
    // Otherwise, tell user error message
        greetingElement.innerText = "Please fill up all the fields!";
    }
}

// Access the greeting node from the DOM
let greetingElement = document.getElementById('greeting-message');

// Change greeting color on hover
greetingElement.addEventListener("mouseover", function( event ) {
    event.target.style.color = "#8BE78B";
});

// Reset style when mouse hovers off 
greetingElement.addEventListener("mouseout", function( event ) {
    event.target.style.color = "";
});

