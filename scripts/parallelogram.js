function calculateParallelogram() {
    // get Parallelogram Base value
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);

    // get Parellelogram Height value
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    
    // get calculation of The Parallelogram Area
    const area = base * height;
    
    // Display the Parallelogram Area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
};