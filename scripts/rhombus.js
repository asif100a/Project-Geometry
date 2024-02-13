function calculateRhombusArea() {
    const D1 = getInputValueById('rhombus-d1');
    // console.log('Rhombus D1', D1);

    const D2 = getInputValueById('rhombus-d2');
    // console.log('Rhombus D2', D2);

    const area = 0.5 * D1 * D2;
    console.log('The area of Rhombus is:', area);

    setInnerTextById('rhombus-aria', area);
};

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
};

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}