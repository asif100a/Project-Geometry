function calculateTraingleArea() {
    // get Triangle Base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText)
    // console.log(triangleBase);

    // get Triangle Height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);
    // console.log(triangleHeight);

    // get calculation the Triangle Area
    const area = 0.5 * triangleBase * triangleHeight;
    console.log('The area of the triangle is:', area);

    // display the The Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
};