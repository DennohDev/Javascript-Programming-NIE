// Function to add two numbers
function add() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Perform addition
    const result = num1 + num2;

    // Display result
    document.getElementById('result').innerText = result;
}

// Function to subtract two numbers
function subtract() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Perform subtraction
    const result = num1 - num2;

    // Display result
    document.getElementById('result').innerText = result;
}

// Function to multiply two numbers
function multiply() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Perform multiplication
    const result = num1 * num2;

    // Display result
    document.getElementById('result').innerText = result;
}

// Function to divide two numbers
function divide() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Check for division by zero
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
    }

    // Perform division
    const result = num1 / num2;

    // Display result
    document.getElementById('result').innerText = result;
}
