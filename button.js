// Step 1: Create the button element
const button = document.createElement('button');

// Step 2: Set button attributes and properties
button.id = 'myButton';
button.textContent = 'Click Me!';
button.className = 'btn'; // Optional: Add a class for styling
button.onclick = function() {
    alert('Button clicked!');
};

// Step 3: Append the button to the container
const container = document.getElementById('container');
container.appendChild(button);