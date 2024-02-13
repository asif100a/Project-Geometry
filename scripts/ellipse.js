function calculateEllipse() {
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');
    
    const area = 3.1416 * a * b;
    
    setText('ellipse-area', area);
};

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;
};

function setText(text, value) {
    const element = document.getElementById(text);
    element.innerText = value;
};