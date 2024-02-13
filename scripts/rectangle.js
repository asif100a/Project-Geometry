function calculateRectangleArea() {
    // get Rectangle Width value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const rectangleWidth = parseFloat(rectangleWidthText);
    // console.log(typeof rectangleWidth);

    // get Rectangle Length value
    const rectangleLengthInput = document.getElementById('rectangle-lenght');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);
    
    // get calculation The Rectangle Area
    const area = rectangleWidth * rectangleLength;
    console.log('The area of the rectangle is:', area);

    // display The Rectangle Area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
};