### Practical Exercise: Simple Calculator

**Objective:** 
Create a simple calculator using JavaScript that performs basic arithmetic operations (addition, subtraction, multiplication, and division). This exercise will help you practice using variables, operators, and functions.

**Instructions:**

1. **Set Up Your Environment:**
   - Open your text editor (e.g., Visual Studio Code).
   - Create a new HTML file named `calculator.html`.
   - Inside the HTML file, create a basic HTML structure with a title and a script tag for JavaScript.

2. **HTML Structure:**
   - Create an HTML form that takes two numeric inputs and has buttons for each arithmetic operation (add, subtract, multiply, divide).
   - Display the result in a designated area (e.g., a `<div>` or `<p>`).

3. **JavaScript Code:**
   - Write JavaScript functions to perform each arithmetic operation.
   - Use variables to store input values and results.
   - Use operators to perform calculations.
   - Link the buttons to the corresponding JavaScript functions using event listeners.

### Step-by-Step Guide:

#### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
</head>
<body>
    <h1>Simple Calculator</h1>
    <form id="calculatorForm">
        <input type="number" id="num1" placeholder="Enter first number">
        <input type="number" id="num2" placeholder="Enter second number"><br><br>
        <button type="button" onclick="add()">Add</button>
        <button type="button" onclick="subtract()">Subtract</button>
        <button type="button" onclick="multiply()">Multiply</button>
        <button type="button" onclick="divide()">Divide</button>
    </form>
    <h2>Result: <span id="result"></span></h2>

    <script src="calculator.js"></script>
</body>
</html>
```

#### Step 2: JavaScript Code

Create a new file named `calculator.js` and add the following code:

```javascript
// Function to add two numbers
function add() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Perform addition
    var result = num1 + num2;

    // Display result
    document.getElementById('result').innerText = result;
}

// Function to subtract two numbers
function subtract() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Perform subtraction
    var result = num1 - num2;

    // Display result
    document.getElementById('result').innerText = result;
}

// Function to multiply two numbers
function multiply() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Perform multiplication
    var result = num1 * num2;

    // Display result
    document.getElementById('result').innerText = result;
}

// Function to divide two numbers
function divide() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check for division by zero
    if (num2 === 0) {
        alert("Cannot divide by zero");
        return;
    }

    // Perform division
    var result = num1 / num2;

    // Display result
    document.getElementById('result').innerText = result;
}
```

### Explanation:

1. **HTML Structure:**
   - An HTML form is used to take two numeric inputs.
   - Buttons are provided for each arithmetic operation.
   - A `<span>` element is used to display the result.

2. **JavaScript Code:**
   - Functions `add()`, `subtract()`, `multiply()`, and `divide()` are defined to perform the respective arithmetic operations.
   - `document.getElementById()` is used to retrieve input values.
   - `parseFloat()` converts the input values from strings to numbers.
   - The result of the operation is stored in a variable and displayed in the `<span>` element with the ID `result`.
   - Basic error handling is implemented in the `divide()` function to check for division by zero.

### Additional Exercise:

- **Validation:** Enhance the calculator by adding input validation to ensure that users enter valid numbers.
- **CSS Styling:** Style the calculator using CSS to make it visually appealing.
- **Additional Features:** Add more complex operations like modulus, exponentiation, or square root.