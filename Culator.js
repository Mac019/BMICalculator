document.getElementById('calculate').addEventListener('click', function () {
    // Get the input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Display the result
    document.getElementById('bmi-result').textContent = bmi.toFixed(2);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('bmi-category').textContent = `Category: ${category}`;
});
