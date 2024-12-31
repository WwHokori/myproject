document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get inputs
    const waveFunction = parseFloat(document.getElementById('waveFunction').value);
    const greensFunction = parseFloat(document.getElementById('greensFunction').value);
    const coordinates = parseFloat(document.getElementById('coordinates').value);

    const result = waveFunction * greensFunction * coordinates;

    document.getElementById('result-value').innerText = isNaN(result) ? "Invalid Input" : result.toFixed(2);
});
